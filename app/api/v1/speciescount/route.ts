import { NextResponse } from "next/server";
import { db } from "@/db";
import { aes } from "@/db/schema";
import { count } from "drizzle-orm";

export async function GET() {
  try {
    const [speciesCount] = await db.select({ count: count() }).from(aes);
    return NextResponse.json(speciesCount, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
