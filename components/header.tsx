"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { LuCircleHelp, LuCompass, LuHouse } from "react-icons/lu";
import { PiPlug, PiPlugDuotone } from "react-icons/pi";
import AddMoreSpecies from "@/components/add-more-species";
import Link from "@/components/custom-link";
import { headerNavLinks } from "@/data/meta-data";
import Package from "@/package.json";

export const runtime = "edge";

const Header: NextPage = () => {
  const pathname = usePathname();
  return (
    <header className="flex mb-0 md:mb-4 justify-between max-w-screen-lg mx-auto w-full md:border-none border-t-[1px] border-slate-300 md:p-4 select-none md:relative fixed inset-x-0 bottom-0 z-50">
      <div className="md:flex hidden space-x-4">
        <div className="md:flex hidden items-center">
          <Link className="flex items-center" href={"/"}>
            <Image src={"/logo.svg"} width="24" height="24" alt={""} priority />
            <span className="flex text-lg self-center font-extrabold px-2">
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
            >
              Beta v{Package.version}
            </Link>
          </sup>
        </div>
      </div>
      <nav className="flex flex-row w-full md:space-x-4 space-x-0 md:w-auto">
        <AddMoreSpecies />
        <div className="hidden md:flex h-full border-y-transparent border-l-transparent border border-r-slate-200"></div>
        <div className="flex text-sm items-center md:justify-start space-x-2 justify-between md:px-0 w-full md:w-auto md:bg-transparent bg-white">
          {headerNavLinks?.map((nav) => (
            <Link
              className={`py-2 px-3 rounded text-xs md:text-sm md:rounded-full md:w-auto w-1/5 ${
                pathname?.includes(nav?.name.toLowerCase()) ||
                (pathname === "/" && nav?.name === "Home")
                  ? "md:bg-red-100 bg-none  text-black"
                  : "md:hover:bg-red-100 text-slate-600 hover:text-red-600"
              } ${
                (nav?.name === "Home" || nav?.name === "AddMoreSpecies") &&
                "visible md:hidden"
              }`}
              key={nav?.name}
              href={nav?.link}
            >
              {nav?.name === "Home" && (
                <LuHouse
                  className={`w-6 h-6 m-auto ${
                    pathname === "/" &&
                    "fill-slate-300" &&
                    "fill-red-100 stroke-red-600"
                  }`}
                />
              )}
              {nav?.name === "Explore" && (
                <LuCompass
                  className={`w-6 h-6 m-auto visible md:hidden ${
                    pathname === "/explore" &&
                    "fill-slate-300" &&
                    "fill-red-100 stroke-red-600"
                  }`}
                />
              )}
              {nav?.name === "AddMoreSpecies" && (
                <BsFillPlusCircleFill
                  className={`w-8 h-8 m-auto ${
                    pathname === "/addmorespecies" &&
                    "fill-slate-300" &&
                    "fill-red-600"
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
                <LuCircleHelp
                  className={`w-6 h-6 m-auto visible md:hidden ${
                    pathname === "/about" && "fill-red-100 stroke-red-600"
                  }`}
                />
              )}
              <span
                className={`flex md:mt-0 mt-1 justify-center ${
                  pathname === nav?.link && "text-red-600"
                }`}
              >
                {nav?.name !== "AddMoreSpecies" && nav?.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
