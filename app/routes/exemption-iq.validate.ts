import type { ActionFunctionArgs } from "@remix-run/node";
import { parse } from "cookie";
// templates/next/certificate.template.ts
import { getAvalaraCredentials } from "../../vendor/exemption-iq/dist/server/helpers/getAvalaraCredentials";

export async function action({ request }: ActionFunctionArgs) {
  try {
    const { customerCode, state } = await request.json();

    if (!customerCode || !state) {
      return new Response(
        JSON.stringify({ error: "Missing customerCode or state" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Read session token from cookies
    const cookieHeader = request.headers.get("Cookie") || "";
    const cookies = parse(cookieHeader);
    const sessionToken = cookies.eiq_session_token;

    if (!sessionToken) {
      return new Response(JSON.stringify({ error: "Missing session token" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
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
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ Avalara validation failed:", res.status, errorText);
      return new Response(
        JSON.stringify({ error: "Avalara validation failed" }),
        {
          status: res.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const data = await res.json();
    const certs = data?.activeCertificates || [];

    const validCerts = certs.filter(
      (cert: any) =>
        cert.exposureZone?.name?.toLowerCase() === state.toLowerCase() &&
        cert.certificate?.valid
    );

    return new Response(
      JSON.stringify({
        status: validCerts.length > 0 ? "valid" : "invalid",
        certificates: validCerts,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    console.error("❌ Uncaught error in Remix validate route:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Validation failed" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
