import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL || process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (scriptUrl) {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          ...body,
        }),
      });

      if (!response.ok) {
        console.warn("Google Apps Script endpoint returned non-200 status:", response.status);
      }
    } else {
      console.log("Form submission received (GOOGLE_SCRIPT_URL not yet configured):", body);
    }

    return NextResponse.json({
      success: true,
      message: "Request submitted successfully. The Ayka Regulatory Affairs Liaison will review your specifications within 24 hours.",
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while submitting your inquiry. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}
