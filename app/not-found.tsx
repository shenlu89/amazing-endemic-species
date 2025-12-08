"use client";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import Link from "@/components/custom-link";
import {
  CONSERVATION_STATUS,
  COUNTRY_NAME,
  IUCN_RED_LIST_URI,
  WIKI_URI,
} from "@/lib/constant";
import fetcher from "@/lib/fetcher";

export default function NotFound() {
  const router = useRouter();
  const {
    data: species,
    isLoading,
    error,
  }: any = useSWR("/api/v1/random", fetcher);

  if (error)
    return (
      <div className="flex flex-col pt-24 justify-center items-center space-y-8 text-lg text-black dark:text-white">
        <h1 className="text-xl">
          Oh no, something went wrong... maybe refresh?
        </h1>
        <button
          type="button"
          className="px-4 py-2 rounded-full font-bold text-sm bg-black hover:opacity-75 text-white dark:bg-white dark:text-black"
          onClick={() => router.refresh()}
        >
          Try again
        </button>
      </div>
    );
  return (
    <section className="flex flex-col h-full items-center pt-12">
      <h1 className="font-extrabold text-5xl tracking-tight mb-4">404</h1>
      <span className="text-gray-600 mb-4">
        Page Not Found. Go Back to{" "}
        <Link
          href="/"
          className="underline hover:text-black dark:hover:text-white underline-offset-[3px]"
        >
          Home
        </Link>{" "}
        Page.
      </span>
      <div className="flex flex-col justify-center w-full items-center space-y-2 mt-2">
        {!isLoading ? (
          <>
            <div className="relative">
              <Link
                href={WIKI_URI + species?.scientific_name?.replace(/\s/g, "_")}
              >
                <Image
                  src={species.image}
                  width={120}
                  height={120}
                  alt=""
                  className="rounded-full shadow"
                  priority
                />
              </Link>
              <Link
                href={
                  WIKI_URI +
                  CONSERVATION_STATUS.get(species.conservation_status)
                }
                className={`flex absolute top-0 right-0 text-sm items-center ${species.conservation_status} justify-center rounded-full w-8 h-8 font-bold`}
              >
                {species.conservation_status}
              </Link>
            </div>
            <div>
              <div className="flex flex-col items-center mt-2 space-y-1">
                <Link
                  href={
                    IUCN_RED_LIST_URI +
                    species.scientific_name.replace(/\s/g, "%20")
                  }
                  className="font-bold text-lg hover:text-red-600"
                >
                  {species.common_name}
                </Link>
                <Link
                  href={
                    IUCN_RED_LIST_URI +
                    species.scientific_name.replace(/\s/g, "%20")
                  }
                  target="_blank"
                  className="hover:text-red-600"
                >
                  {species.scientific_name}
                </Link>
                <Link
                  href={WIKI_URI + COUNTRY_NAME.get(species.iso_code)}
                  className="hover:text-red-600"
                >{`${
                  species.iso_code && getUnicodeFlagIcon(species.iso_code)
                } ${
                  species.iso_code && COUNTRY_NAME.get(species.iso_code)
                }`}</Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="loading !top-1/4">
              {new Array(4).fill(null).map((_, index) => (
                <div key={index} className="paw">
                  <svg>
                    <use xlinkHref="#paw" />
                  </svg>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center text-lg mt-8">
              Loading...
            </div>
          </>
        )}
      </div>
    </section>
  );
}
