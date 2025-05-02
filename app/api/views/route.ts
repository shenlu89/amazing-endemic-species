import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function GET() {
  try {
    const views = await redis.incr("aes");

    return NextResponse.json(
      {
        total: views?.toString(),
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
