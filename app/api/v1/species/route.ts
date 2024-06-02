import { NextResponse } from "next/server";
import { db } from "@/db";
import { aes } from "@/db/schema";

export async function GET() {
  try {
    const species = await db.select().from(aes).all();
    return NextResponse.json(species, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
