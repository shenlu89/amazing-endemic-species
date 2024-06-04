import { explorePage } from "@/data/meta-data";
import type { Metadata } from "next";

export const metadata: Metadata = explorePage.metadata;

export default function PostAJobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
