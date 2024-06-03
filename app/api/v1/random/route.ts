import { NextResponse } from "next/server";
import { db } from "@/db";
import { aes } from "@/db/schema";
import { sql } from "drizzle-orm";

export const revalidate = 0;

export async function GET(req: any) {
  try {
    const [random] = await db
      .select()
      .from(aes)
      .orderBy(sql`RANDOM()`)
      .limit(1);
    return NextResponse.json(
      {
        image: req.url.replace("api/v1/random", `images/${random.id}.jpg`),
        ...random,
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
