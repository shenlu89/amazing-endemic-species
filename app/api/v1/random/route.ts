import { NextResponse } from "next/server";
import AES from "@/data/aes.json";

export async function GET(req: any) {
  const species = AES[Math.floor(Math.random() * AES.length)];
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
