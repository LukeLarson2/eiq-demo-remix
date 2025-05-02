import type { ActionFunctionArgs } from "@remix-run/node";
// templates/next/certificate.template.ts
import { getAvalaraCredentials } from "../../vendor/exemption-iq/dist/server/helpers/getAvalaraCredentials";

import { parse } from "cookie";

export async function action({ request }: ActionFunctionArgs) {
  try {
    const { customerCode } = await request.json();

    if (!customerCode) {
      return new Response("Missing customerCode", { status: 400 });
    }

    // 🔐 Extract session token from cookies
    const cookieHeader = request.headers.get("Cookie") || "";
    const cookies = parse(cookieHeader);
    const sessionToken = cookies.eiq_session_token;

    if (!sessionToken) {
      return new Response("Missing session token", { status: 401 });
    }

    const credentials = await getAvalaraCredentials({ token: sessionToken });

    const auth = Buffer.from(
      `${credentials.username}:${credentials.password}`
    ).toString("base64");

    const baseUrl = process.env.AVATAX_API_BASE!;
    const url = `${baseUrl}/companies/${credentials.companyId}/customers/${customerCode}?$include=active_certificates`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
        "X-Avalara-Client": credentials.clientId,
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText);
    }

    const data = await res.json();
    const certs = data?.activeCertificates || [];

    const mapped = certs.map((cert: any) => ({
      id: String(cert.id),
      signedDate: new Date(cert.certificate.signedDate).toLocaleDateString(),
      expirationDate: cert.certificate.expirationDate
        ? new Date(cert.certificate.expirationDate).toLocaleDateString()
        : "N/A",
      exposureZone: cert.exposureZone?.name || "Unknown",
      exemptionReason: cert.actualTaxCode?.name || "",
      status: cert.certificate.valid ? "valid" : "invalid",
      pdfUrl: `/api/exemption-iq/certificate/${cert.id}`, // Point to your own endpoint if needed
    }));

    return new Response(JSON.stringify(mapped), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err: any) {
    console.error("❌ Remix certificate action error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Failed to fetch certificates" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
