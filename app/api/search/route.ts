import { asc, desc, like, or } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { aes } from "@/db/schema";

const orderByColumn = (sortType: string, sortDirection: string) => {
  let column;
  switch (sortType) {
    case "common_name":
      column = aes.common_name;
      break;
    case "scientific_name":
      column = aes.scientific_name;
      break;
    case "iso_code":
      column = aes.iso_code;
      break;
    default:
      column = aes.id;
      break;
  }
  return sortDirection === "asc" ? asc(column) : desc(column);
};

export async function GET(request: Request) {
  const { searchParams }: any = new URL(request.url);
  const query = decodeURI(searchParams.get("q") || "");
  const sortType = decodeURI(searchParams.get("sortType") || "id");
  const sortDirection = decodeURI(searchParams.get("sortDirection") || "asc");

  try {
    const species = await db
      .select()
      .from(aes)
      .where(
        or(
          like(aes.common_name, `%${query}%`),
          like(aes.scientific_name, `%${query}%`),
          like(aes.iso_code, `%${query}%`),
        ),
      )
      .orderBy(orderByColumn(sortType, sortDirection));
    return NextResponse.json({
      results: species,
      count: species.length,
    });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
