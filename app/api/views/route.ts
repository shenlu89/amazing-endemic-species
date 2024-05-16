import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function GET(_request: Request, name: string) {
  try {
    const views = await redis.incr(name);

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
