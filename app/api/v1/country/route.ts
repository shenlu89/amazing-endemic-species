import { NextResponse } from "next/server";
import AES from "@/data/aes.json";

export async function GET() {
  const countrySet = new Set(AES.map((item) => item.iso_code));
  try {
    return NextResponse.json(Array.from(countrySet), { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
