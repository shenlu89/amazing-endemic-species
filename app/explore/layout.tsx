import type { Metadata } from "next";
import { explorePage } from "@/data/meta-data";

export const metadata: Metadata = explorePage.metadata;

export default function PostAJobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
