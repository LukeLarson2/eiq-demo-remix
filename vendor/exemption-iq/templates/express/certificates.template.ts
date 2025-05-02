import { Request, Response } from "express";
// templates/next/certificate.template.ts
import { getAvalaraCredentials } from "__EIQ_VENDOR__/getAvalaraCredentials";

// Assumes cookie-parser is used
export async function getCustomerCertificates(req: Request, res: Response) {
  try {
    const { customerCode } = req.body;
    if (!customerCode) {
      return res.status(400).json({ error: "Missing customerCode" });
    }

    const sessionToken = req.cookies["eiq_session_token"];
    if (!sessionToken) {
      return res.status(401).json({ error: "Missing session token" });
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

    const certRes = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
        "X-Avalara-Client": credentials.clientId,
      },
    });

    if (!certRes.ok) {
      const error = await certRes.text();
      throw new Error(error);
    }

    const data = await certRes.json();
    const certs = data?.activeCertificates || [];

    const normalized = certs.map((cert: any) => ({
      id: String(cert.id),
      signedDate: new Date(cert.certificate.signedDate).toLocaleDateString(),
      expirationDate: cert.certificate.expirationDate
        ? new Date(cert.certificate.expirationDate).toLocaleDateString()
        : "N/A",
      exposureZone: cert.exposureZone?.name || "Unknown",
      exemptionReason: cert?.actualTaxCode?.name || "",
      status: cert.certificate.valid ? "valid" : "invalid",
      pdfUrl: `/api/exemption-iq/certificate/${cert.id}`, // Assuming local proxying
    }));

    return res.json(normalized);
  } catch (err: any) {
    console.error("❌ Certificate fetch error:", err);
    return res.status(500).json({ error: err.message || "Certificate error" });
  }
}
