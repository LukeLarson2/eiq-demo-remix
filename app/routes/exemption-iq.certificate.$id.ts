import type { LoaderFunctionArgs } from "@remix-run/node";
// templates/next/certificate.template.ts
import { getAvalaraCredentials } from "../../vendor/exemption-iq/dist/server/helpers/getAvalaraCredentials";

import { parse } from "cookie";

export async function loader({ request, params }: LoaderFunctionArgs) {
  const certificateId = params.id;

  if (!certificateId) {
    return new Response("Missing certificate ID", { status: 400 });
  }

  const cookieHeader = request.headers.get("Cookie") || "";
  const cookies = parse(cookieHeader);
  const sessionToken = cookies.eiq_session_token;

  if (!sessionToken) {
    return new Response("Missing session token", { status: 401 });
  }

  try {
    const credentials = await getAvalaraCredentials({ token: sessionToken });

    const auth = Buffer.from(
      `${credentials.username}:${credentials.password}`
    ).toString("base64");

    const baseUrl = process.env.AVATAX_API_BASE!;
    const url = `${baseUrl}/companies/${credentials.companyId}/certificates/${certificateId}/attachment`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
        "X-Avalara-Client": credentials.clientId,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(errorText, { status: response.status });
    }

    const stream = response.body;
    if (!stream) {
      return new Response("Missing PDF stream", { status: 500 });
    }

    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="certificate-${certificateId}.pdf"`,
      },
    });
  } catch (err: any) {
    console.error("❌ Remix certificate fetch error:", err);
    return new Response("Failed to fetch certificate", { status: 500 });
  }
}
