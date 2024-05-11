"use client";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { GoStarFill } from "react-icons/go";
import Link from "next/link";

const GitHubStars = () => {
  const { data, isLoading }: any = useSWR(
    `https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_OWNER}/${process.env.NEXT_PUBLIC_GITHUB_REPO}`,
    fetcher
  );

  return (
    <Link
      href={"https://github.com/shenlu89/amazing-endemic-species/stargazers"}
      className="md:flex hidden items-center text-white border border-black text-sm font-bold hover:opacity-75"
      target="_blank"
    >
      <div className="flex px-3 bg-black h-full items-center space-x-2">
        <span>Stars</span>
        <GoStarFill className="w-4 h-4" />
      </div>
      <div className="flex px-3 text-black bg-white">
        {isLoading ? "loading..." : `${data["stargazers_count"] || 0}`}
      </div>
    </Link>
  );
};

export default GitHubStars;
