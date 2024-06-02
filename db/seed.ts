import { db } from "@/db";
import { aes } from "@/db/schema";
import AES from "@/data/aes.json";

async function seed() {
  await db.delete(aes);
  await db.insert(aes).values(AES as []);
  console.log("Inserting completed");
}

async function main() {
  try {
    await seed();
    console.log("Seeding completed");
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
}

main();
