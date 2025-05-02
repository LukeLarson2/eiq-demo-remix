// templates/next/certificate.template.ts
import { getAvalaraCredentials } from "__EIQ_VENDOR__/getAvalaraCredentials";

export async function POST({ request }: { request: Request }) {
  try {
    const { customerCode } = await request.json();

    if (!customerCode) {
      return new Response("Missing customerCode", { status: 400 });
    }

    // 🔐 Extract session token from cookies
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

    const auth = Buffer.from(
      `${credentials.username}:${credentials.password}`
    ).toString("base64");

    const baseUrl =
      typeof process !== "undefined"
        ? process.env.AVATAX_API_BASE
        : "https://sandbox-rest.avatax.com/api/v2";
    const url = `${baseUrl}/companies/${credentials.companyId}/customers/${customerCode}?$include=active_certificates`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
        "X-Avalara-Client": credentials.clientId,
      },
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(error);
    }

    const data = await res.json();
    const certs = data?.activeCertificates || [];

    const normalized = certs.map((cert: any) => ({
      id: String(cert.id),
      signedDate: new Date(cert.certificate.signedDate).toLocaleDateString(),
      expirationDate: cert.certificate.expirationDate
        ? new Date(cert.certificate.expirationDate).toLocaleDateString()
        : "N/A",
      exposureZone: cert.exposureZone?.name || "Unknown",
      exemptionReason: cert.actualTaxCode?.name || "",
      status: cert.certificate.valid ? "valid" : "invalid",
      pdfUrl: `/api/exemption-iq/certificate/${cert.id}`,
    }));

    return new Response(JSON.stringify(normalized), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("❌ Certificate fetch error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Certificate error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
