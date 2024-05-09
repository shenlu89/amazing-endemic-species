import { NextResponse } from "next/server";
import amazingSpecies from "@/data/amazing-species.json";

export async function GET() {
  const countrySet = new Set(amazingSpecies.map((item) => item.code));
  try {
    return NextResponse.json(
      {
        count: countrySet.size,
        results: Array.from(countrySet),
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
