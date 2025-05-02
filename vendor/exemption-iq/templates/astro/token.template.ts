// templates/next/certificate.template.ts
import { getAvalaraCredentials } from "__EIQ_VENDOR__/getAvalaraCredentials";

export async function POST({ request }: { request: Request }) {
  try {
    const { customerCode, ...customerInfo } = await request.json();

    if (!customerCode) {
      return new Response(
        JSON.stringify({ error: "Customer code is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 🔐 Extract session token from cookie header
    const cookieHeader = request.headers.get("cookie") || "";
    const cookies = Object.fromEntries(
      cookieHeader.split("; ").map((c) => {
        const [key, ...v] = c.split("=");
        return [key, decodeURIComponent(v.join("="))];
      })
    );
    const sessionToken = cookies["eiq_session_token"];

    if (!sessionToken) {
      return new Response(JSON.stringify({ error: "Missing session token" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const credentials = await getAvalaraCredentials({ token: sessionToken });

    const baseUrl =
      typeof process !== "undefined"
        ? process.env.AVATAX_API_BASE
        : "https://sandbox-rest.avatax.com/api/v2";
    const auth = Buffer.from(
      `${credentials.username}:${credentials.password}`
    ).toString("base64");

    const fetchCustomer = async () => {
      const res = await fetch(
        `${baseUrl}/companies/${credentials.companyId}/customers/${customerCode}`,
        {
          headers: {
            Authorization: `Basic ${auth}`,
            "X-Avalara-Client": credentials.clientId,
          },
        }
      );
      if (!res.ok && res.status !== 404) throw new Error(await res.text());
      return res.status === 404 ? null : await res.json();
    };

    const createCustomer = async () => {
      const payload = {
        companyId: credentials.companyId,
        customerCode,
        name: customerInfo.name,
        emailAddress: customerInfo.emailAddress,
        line1: customerInfo.addressLine1 || "",
        line2: customerInfo.addressLine2 || "",
        city: customerInfo.city || "",
        postalCode: customerInfo.postalCode || "",
        phoneNumber: customerInfo.phoneNumber || "",
        faxNumber: customerInfo.faxNumber || "",
        country: customerInfo.country || "US",
        region: customerInfo.region || "",
      };

      const res = await fetch(
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
      if (!res.ok) throw new Error(await res.text());
      return await res.json();
    };

    const customer = (await fetchCustomer()) || (await createCustomer());

    const tokenRes = await fetch(
      `${baseUrl}/companies/${credentials.companyId}/ecommercetokens`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "X-Avalara-Client": credentials.clientId,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerNumber: customerCode,
          ...customerInfo,
        }),
      }
    );

    if (!tokenRes.ok) throw new Error(await tokenRes.text());

    const { token } = await tokenRes.json();

    return new Response(JSON.stringify({ token, customer }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("❌ Token generation error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
