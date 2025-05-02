import type { ActionFunctionArgs } from "@remix-run/node";
import { parse } from "cookie";
// templates/next/certificate.template.ts
import { getAvalaraCredentials } from "__EIQ_VENDOR__/getAvalaraCredentials";

export async function action({ request }: ActionFunctionArgs) {
  try {
    const { customerCode, ...customerInfo } = await request.json();

    if (!customerCode) {
      return new Response("Customer code is required", { status: 400 });
    }

    // 🔐 Read session token from cookies
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
    const companyId = credentials.companyId;

    const fetchCustomer = async () => {
      const res = await fetch(
        `${baseUrl}/companies/${companyId}/customers/${customerCode}`,
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
        companyId,
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

      const res = await fetch(`${baseUrl}/companies/${companyId}/customers`, {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "X-Avalara-Client": credentials.clientId,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(await res.text());
      return await res.json();
    };

    const customer = (await fetchCustomer()) || (await createCustomer());

    const tokenRes = await fetch(
      `${baseUrl}/companies/${companyId}/ecommercetokens`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "X-Avalara-Client": credentials.clientId,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerNumber: customerCode, ...customer }),
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
    return new Response(err.message, { status: 500 });
  }
}
