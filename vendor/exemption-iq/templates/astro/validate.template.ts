// templates/next/certificate.template.ts
import { getAvalaraCredentials } from "__EIQ_VENDOR__/getAvalaraCredentials";

export async function POST({ request }: { request: Request }) {
  try {
    const { customerCode, state } = await request.json();

    if (!customerCode || !state) {
      return new Response("Missing customerCode or state", { status: 400 });
    }

    // 🍪 Extract session token from cookies
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

    const url = `${baseUrl}/companies/${credentials.companyId}/customers/${customerCode}?$include=active_certificates`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
        "X-Avalara-Client": credentials.clientId,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ Avalara validation failed:", res.status, errorText);
      return new Response("Avalara validation failed", { status: res.status });
    }

    const data = await res.json();
    const certs = data?.activeCertificates || [];

    const valid = certs.filter(
      (cert: any) =>
        cert.exposureZone?.name?.toLowerCase() === state.toLowerCase() &&
        cert.certificate?.valid
    );

    return new Response(
      JSON.stringify({
        status: valid.length > 0 ? "valid" : "invalid",
        certificates: valid,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("❌ Uncaught validation error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Validation failed" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
