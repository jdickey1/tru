import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

import { rateLimitByIP } from "@/lib/rate-limit";
import { validateOrigin } from "@/lib/csrf";

const ALLOWED_ORIGINS = ["https://texasrepublicansunited.com", "https://www.texasrepublicansunited.com"];

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(request: NextRequest) {
  try {
  if (!validateOrigin(request, ALLOWED_ORIGINS)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { success: rlOk } = rateLimitByIP(request, "signup", 5, 60000);
  if (!rlOk) {
    return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  }


    const body = await request.json();
    const { firstName, lastName, email, phone, county } = body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "First name, last name, and email are required" },
        { status: 400 }
      );
    }

    // Insert into database
    const result = await pool.query(
      `INSERT INTO signups (first_name, last_name, email, phone, county, created_at)
       VALUES ($1, $2, $3, $4, $5, NOW())
       ON CONFLICT (email) DO UPDATE SET
         first_name = EXCLUDED.first_name,
         last_name = EXCLUDED.last_name,
         phone = COALESCE(EXCLUDED.phone, signups.phone),
         county = COALESCE(EXCLUDED.county, signups.county),
         updated_at = NOW()
       RETURNING id`,
      [firstName, lastName, email, phone || null, county || null]
    );

    return NextResponse.json({ 
      success: true, 
      id: result.rows[0].id 
    });

  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Failed to process signup" },
      { status: 500 }
    );
  }
}
