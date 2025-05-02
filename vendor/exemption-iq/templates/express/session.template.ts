import { Request, Response } from "express";
import { getSessionToken } from "__EIQ_VENDOR__/getSessionToken";

export async function getSession(req: Request, res: Response) {
  try {
    const sessionToken = await getSessionToken();

    res
      .cookie("eiq_session_token", sessionToken.token, {
        httpOnly: true,
        maxAge: 3600 * 1000, // 1 hour in ms
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      })
      .json({ token: sessionToken.token });
  } catch (err: any) {
    console.error("❌ Failed to generate session:", err);
    res.status(500).json({ error: "Failed to generate session token" });
  }
}
