// templates/next/certificate.template.ts
import { getAvalaraCredentials } from "__EIQ_VENDOR__/getAvalaraCredentials";

export async function GET({
  request,
  params,
}: {
  request: Request;
  params: { id: string };
}) {
  const certificateId = params.id;
  const cookieHeader = request.headers.get("cookie") || "";
  const cookies = Object.fromEntries(
    cookieHeader.split("; ").map((c) => {
      const [k, ...v] = c.split("=");
      return [k, decodeURIComponent(v.join("="))];
    })
  );

  const sessionToken = cookies["eiq_session_token"];

  if (!certificateId) {
    return new Response("Missing certificate ID", { status: 400 });
  }

  if (!sessionToken) {
    return new Response("Missing session token", { status: 401 });
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
    console.error("❌ Certificate fetch failed:", err);
    return new Response("Internal server error", { status: 500 });
  }
}
