"use client";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Package from "@/package.json";
import { headerNavLinks } from "@/data/meta-data";
import { usePathname } from "next/navigation";
import { LuHome, LuHelpCircle } from "react-icons/lu";
import AddMoreSpecies from "@/components/add-more-species";
import GitHubStars from "@/components/github-stars";
import { PiPlug, PiPlugDuotone } from "react-icons/pi";
// import ShareButton from "@/components/share-button";

export const runtime = "edge";

const Header: NextPage = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-between w-full md:border-none border-t-[1px] md:p-4 select-none md:relative fixed inset-x-0 bottom-0 z-50">
      <div className="md:flex hidden space-x-4">
        <div className="md:flex hidden items-center">
          <Link className="flex items-center" href={"/"}>
            <Image src={"/logo.svg"} width="24" height="24" alt={""} priority />
            <span className="flex self-center font-extrabold px-2">
              Amazing Endemic Species
            </span>
          </Link>
          <sup
            title={`v${Package.version}`}
            className="flex px-2 py-1 rounded-full text-xs text-red-600 bg-red-100"
          >
            <Link
              className="flex items-center"
              href="https://github.com/shenlu89/amazing-endemic-species/releases"
              target="_blank"
            >
              Alpha v{Package.version}
            </Link>
          </sup>
        </div>
      </div>
      <nav className="flex flex-row w-full md:space-x-4 space-x-0 md:w-auto">
        <AddMoreSpecies />
        {/* <ShareButton /> */}
        <div className="hidden md:flex h-full border-y-transparent border-l-transparent border border-r-slate-200"></div>
        <div className="flex text-sm items-center md:justify-start space-x-2 justify-between w-full md:w-auto md:bg-transparent bg-white">
          {headerNavLinks?.map((nav) => (
            <Link
              className={`py-2 px-3 rounded md:rounded-full ${
                pathname?.includes(nav?.name.toLowerCase()) ||
                (pathname === "/" && nav?.name === "Home")
                  ? "md:bg-red-100 bg-none  text-black"
                  : "md:hover:bg-red-100 text-slate-600 hover:text-red-600"
              } ${nav?.name === "Home" && "visible md:hidden"}`}
              key={nav?.name}
              href={nav?.link}
            >
              {nav?.name === "Home" && (
                <LuHome
                  className={`w-6 h-6 m-auto ${
                    pathname === "/" &&
                    "fill-slate-300" &&
                    "fill-red-100 stroke-red-600"
                  }`}
                />
              )}
              {nav?.name === "API" &&
                (pathname === "/api" ? (
                  <PiPlugDuotone
                    className={`w-6 h-6 m-auto visible md:hidden fill-red-600`}
                  />
                ) : (
                  <PiPlug className={`w-6 h-6 m-auto visible md:hidden`} />
                ))}
              {nav?.name === "About" && (
                <LuHelpCircle
                  className={`w-6 h-6 m-auto visible md:hidden ${
                    pathname === "/about" && "fill-red-100 stroke-red-600"
                  }`}
                />
              )}
              <span
                className={`flex md:mt-0 mt-1 ${
                  pathname == nav?.link && "text-red-600"
                }`}
              >
                {nav?.name}
              </span>
            </Link>
          ))}
        </div>
        <GitHubStars />
      </nav>
    </header>
  );
};

export default Header;
