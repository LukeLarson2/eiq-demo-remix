import type { LoaderFunctionArgs } from "@remix-run/node";
import { getSessionToken } from "__EIQ_VENDOR__/getSessionToken";

export async function loader({ request }: LoaderFunctionArgs) {
  const sessionToken = await getSessionToken();

  return new Response(JSON.stringify({ token: sessionToken.token }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": `eiq_session_token=${sessionToken.token}; Path=/; Max-Age=3600; HttpOnly; SameSite=Lax`,
    },
  });
}
