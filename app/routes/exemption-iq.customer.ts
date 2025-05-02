import type { ActionFunctionArgs } from "@remix-run/node";
// templates/next/certificate.template.ts
import { getAvalaraCredentials } from "../../vendor/exemption-iq/dist/server/helpers/getAvalaraCredentials";

import { parse } from "cookie";

export async function action({ request }: ActionFunctionArgs) {
  try {
    const { customerCode, ...customerInfo } = await request.json();

    if (!customerCode) {
      return new Response("Missing customerCode", { status: 400 });
    }

    // 🔐 Read session token from cookie
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
    const customerUrl = `${baseUrl}/companies/${credentials.companyId}/customers/${customerCode}`;

    // Check if customer exists
    const checkRes = await fetch(customerUrl, {
      headers: {
        Authorization: `Basic ${auth}`,
        "X-Avalara-Client": credentials.clientId,
        "Content-Type": "application/json",
      },
    });

    if (checkRes.ok) {
      const existing = await checkRes.json();
      return new Response(existing);
    }

    // If not found, create customer
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
      const errorText = await createRes.text();
      throw new Error(errorText);
    }

    const newCustomer = await createRes.json();
    return new Response(newCustomer);
  } catch (err: any) {
    console.error("❌ Remix customer action error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Customer creation failed" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
