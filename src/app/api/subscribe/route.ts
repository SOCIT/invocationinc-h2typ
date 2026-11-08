import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const emailRaw = typeof body?.email === "string" ? body.email.trim() : "";

    if (!emailRaw || !EMAIL_RE.test(emailRaw) || emailRaw.length > 254) {
      return NextResponse.json(
        { error: "Enter a valid email address." },
        { status: 400 }
      );
    }

    const email = emailRaw.toLowerCase();
    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!apiKey || !audienceId) {
      console.error("[newsletter] Resend is not configured.");
      return NextResponse.json(
        { error: "Unable to subscribe. Try again." },
        { status: 503 }
      );
    }

    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, unsubscribed: false }),
      }
    );

    // A repeat signup is already on the list, not an error for the reader.
    if (!res.ok && res.status !== 409) {
      console.error(`[newsletter] Resend subscribe failed: ${res.status}`);
      return NextResponse.json(
        { error: "Unable to subscribe. Try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "You're on the list",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to subscribe. Try again." },
      { status: 500 }
    );
  }
}
