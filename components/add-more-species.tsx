import Link from "next/link";
import { FiPlusCircle } from "react-icons/fi";

export default function AddMoreSpecies({ src, alt }: any) {
  return (
    <Link
      className="md:flex hidden hover:opacity-75 text-sm text-white bg-red-600 py-2 px-3 items-center rounded-full space-x-2 font-bold"
      href="https://github.com/shenlu89/amazing-endemic-species?tab=readme-ov-file#contributing-guidelines"
      target="_blank"
    >
      <FiPlusCircle className="w-5 h-5" />
      <span>Add More Species</span>
    </Link>
  );
}
