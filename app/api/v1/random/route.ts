import { NextResponse } from "next/server";
import amazingSpecies from "@/data/amazing-species.json";

export async function GET(req: any) {
  const species =
    amazingSpecies[Math.floor(Math.random() * amazingSpecies.length)];
  try {
    return NextResponse.json(
      {
        image: req.url.replace("api/v1/random", `images/${species.id}.jpg`),
        ...species,
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
