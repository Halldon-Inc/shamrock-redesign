import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema, sanitizeInput } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    // Rate limiting by IP
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";
    const { allowed, remaining } = checkRateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        {
          status: 429,
          headers: { "X-RateLimit-Remaining": String(remaining) },
        }
      );
    }

    // Parse and validate request body
    const body: unknown = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: "Validation failed", fieldErrors: errors },
        { status: 400 }
      );
    }

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeInput(result.data.name),
      email: sanitizeInput(result.data.email),
      phone: sanitizeInput(result.data.phone),
      message: sanitizeInput(result.data.message),
    };

    // In production, this would send an email or save to a database.
    // For now, log the submission (server-side only).
    console.log("Career application received:", {
      name: sanitizedData.name,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      messageLength: sanitizedData.message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your application! We'll be in touch soon.",
      },
      {
        status: 200,
        headers: { "X-RateLimit-Remaining": String(remaining) },
      }
    );
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

// Reject other methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
