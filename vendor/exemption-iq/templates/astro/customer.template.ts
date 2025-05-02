// templates/next/certificate.template.ts
import { getAvalaraCredentials } from "__EIQ_VENDOR__/getAvalaraCredentials";

export async function POST({ request }: { request: Request }) {
  try {
    const { customerCode, ...customerInfo } = await request.json();

    if (!customerCode) {
      return new Response("Missing customerCode", { status: 400 });
    }

    // 🔐 Parse cookies to extract session token
    const cookieHeader = request.headers.get("cookie") || "";
    const cookies = Object.fromEntries(
      cookieHeader.split("; ").map((c) => {
        const [key, ...v] = c.split("=");
        return [key, decodeURIComponent(v.join("="))];
      })
    );

    const sessionToken = cookies["eiq_session_token"];
    if (!sessionToken) {
      return new Response("Missing session token", { status: 401 });
    }

    const credentials = await getAvalaraCredentials({ token: sessionToken });

    const baseUrl =
      typeof process !== "undefined"
        ? process.env.AVATAX_API_BASE
        : "https://sandbox-rest.avatax.com/api/v2";
    const auth = Buffer.from(
      `${credentials.username}:${credentials.password}`
    ).toString("base64");

    // 🔍 Try to fetch existing customer
    const checkRes = await fetch(
      `${baseUrl}/companies/${credentials.companyId}/customers/${customerCode}`,
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "X-Avalara-Client": credentials.clientId,
          "Content-Type": "application/json",
        },
      }
    );

    if (checkRes.ok) {
      const existingCustomer = await checkRes.json();
      return new Response(JSON.stringify(existingCustomer), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 🆕 Create new customer
    const payload = {
      companyId: credentials.companyId,
      customerCode,
      ...customerInfo,
    };

    const createRes = await fetch(
      `${baseUrl}/companies/${credentials.companyId}/customers`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "X-Avalara-Client": credentials.clientId,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const customer = await createRes.json();

    return new Response(JSON.stringify(customer), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("❌ Customer create/fetch error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Customer error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
