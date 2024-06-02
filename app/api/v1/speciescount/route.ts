import { NextResponse } from "next/server";
import AES from "@/data/aes.json";

export async function GET() {
  try {
    return NextResponse.json(
      {
        count: AES?.length,
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
