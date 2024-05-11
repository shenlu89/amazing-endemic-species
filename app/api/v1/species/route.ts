import { NextResponse } from "next/server";
import amazingSpecies from "@/data/amazing-species.json";

export async function GET() {
  try {
    return NextResponse.json(amazingSpecies, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
