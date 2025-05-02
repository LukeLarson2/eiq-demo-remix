import { Request, Response } from "express";
// templates/next/certificate.template.ts
import { getAvalaraCredentials } from "__EIQ_VENDOR__/getAvalaraCredentials";

export async function getToken(req: Request, res: Response) {
  try {
    const { customerCode, ...customerInfo } = req.body;

    if (!customerCode) {
      return res.status(400).json({ error: "Customer code is required" });
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
    return res.json({ token, customer });
  } catch (err: any) {
    console.error("❌ Token generation error:", err);
    return res.status(500).json({ error: err.message || "Token error" });
  }
}
