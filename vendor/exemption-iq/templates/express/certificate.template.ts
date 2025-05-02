import { Request, Response } from "express";
import { Readable } from "stream";
// templates/next/certificate.template.ts
import { getAvalaraCredentials } from "__EIQ_VENDOR__/getAvalaraCredentials";

// Assumes cookie-parser middleware is used in your Express app
export async function getCertificate(req: Request, res: Response) {
  const certificateId = req.params.id;

  if (!certificateId) {
    return res.status(400).send("Missing certificate ID");
  }

  const sessionToken = req.cookies["eiq_session_token"];
  if (!sessionToken) {
    return res.status(401).send("Missing session token");
  }

  try {
    const credentials = await getAvalaraCredentials({ token: sessionToken });

    const basicAuth = Buffer.from(
      `${credentials.username}:${credentials.password}`
    ).toString("base64");

    const baseUrl =
      typeof process !== "undefined"
        ? process.env.AVATAX_API_BASE
        : "https://sandbox-rest.avatax.com/api/v2";
    const url = `${baseUrl}/companies/${credentials.companyId}/certificates/${certificateId}/attachment`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "X-Avalara-Client": credentials.clientId,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).send(errorText);
    }

    const stream = response.body;
    if (!stream) {
      return res.status(500).send("Missing PDF stream");
    }

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename="certificate-${certificateId}.pdf"`
    );

    Readable.fromWeb(stream as any).pipe(res);
  } catch (err: any) {
    console.error("❌ Certificate fetch error:", err);
    res.status(500).send("Internal server error");
  }
}
