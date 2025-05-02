import { Request, Response } from "express";
// templates/next/certificate.template.ts
import { getAvalaraCredentials } from "__EIQ_VENDOR__/getAvalaraCredentials";

export async function validateCertificate(req: Request, res: Response) {
  try {
    const { customerCode, state } = req.body;

    if (!customerCode || !state) {
      return res.status(400).json({ error: "Missing customerCode or state" });
    }

    const sessionToken = req.cookies["eiq_session_token"];
    if (!sessionToken) {
      return res.status(401).json({ error: "Missing session token" });
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

    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
        "X-Avalara-Client": credentials.clientId,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        "❌ Avalara validation failed:",
        response.status,
        errorText
      );
      return res
        .status(response.status)
        .json({ error: "Avalara validation failed" });
    }

    const data = await response.json();
    const certs = data?.activeCertificates || [];

    const validCerts = certs.filter(
      (cert: any) =>
        cert.exposureZone?.name?.toLowerCase() === state.toLowerCase() &&
        cert.certificate?.valid
    );

    return res.json({
      status: validCerts.length > 0 ? "valid" : "invalid",
      certificates: validCerts,
    });
  } catch (err: any) {
    console.error("❌ Uncaught error in validateCertificate:", err);
    return res.status(500).json({ error: err.message || "Validation failed" });
  }
}
