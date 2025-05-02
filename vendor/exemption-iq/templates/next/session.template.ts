// /api/exemption-iq/session/route.ts

import { NextResponse } from "next/server";
import { getSessionToken } from "__EIQ_VENDOR__/getSessionToken";

export async function GET() {
  const sessionToken = await getSessionToken();

  const response = NextResponse.json({ token: sessionToken.token });
  response.headers.set(
    "Set-Cookie",
    `eiq_session_token=${sessionToken.token}; Path=/; Max-Age=3600; HttpOnly; SameSite=Lax`
  );

  return response;
}
