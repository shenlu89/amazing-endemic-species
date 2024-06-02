import { NextResponse } from "next/server";
import { db } from "@/db";
import { sql } from "drizzle-orm";

export async function GET(req: any) {
  try {
    const [random] = (
      await db.run(sql`SELECT * FROM aes ORDER BY RANDOM() LIMIT 1`)
    ).rows;
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
