import { Request, Response } from "express";
// templates/next/certificate.template.ts
import { getAvalaraCredentials } from "__EIQ_VENDOR__/getAvalaraCredentials";

// Assumes cookie-parser middleware is used
export async function createOrGetCustomer(req: Request, res: Response) {
  try {
    const { customerCode, ...customerInfo } = req.body;

    if (!customerCode) {
      return res.status(400).json({ error: "Missing customerCode" });
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

    // Try to fetch the existing customer
    const url = `${baseUrl}/companies/${credentials.companyId}/customers/${customerCode}`;
    const existing = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
        "X-Avalara-Client": credentials.clientId,
        "Content-Type": "application/json",
      },
    });

    if (existing.ok) {
      return res.json(await existing.json());
    }

    // If not found, create the customer
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

    if (!createRes.ok) {
      const error = await createRes.text();
      throw new Error(error);
    }

    return res.json(await createRes.json());
  } catch (err: any) {
    console.error("❌ Customer fetch/create error:", err);
    return res.status(500).json({ error: err.message || "Customer error" });
  }
}
