import { NextResponse } from "next/server";
import { db } from "@/db";
import { aes } from "@/db/schema";

export async function GET() {
  try {
    const iso_codes = await db
      .selectDistinct({ iso_code: aes.iso_code })
      .from(aes);
    return NextResponse.json(
      iso_codes.map((code) => code.iso_code),
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
