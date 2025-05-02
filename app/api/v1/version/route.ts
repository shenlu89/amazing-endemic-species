import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ version: "2024-6" }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}