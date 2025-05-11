"use client";
import { ReactElement } from "react";
import Image from "next/image";
import {
  CONSERVATION_STATUS,
  COUNTRY_NAME,
  IUCN_RED_LIST_URI,
  WIKI_URI,
} from "@/lib/constant";
import Link from "@/components/custom-link";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

const SpeciesItem = ({ children, ...props }: any): ReactElement => {
  const { imageUrl, species, className } = props;
  const { scientific_name, common_name, id, conservation_status, iso_code } =
    species;

  return (
    <div className={className}>
      <div className="flex m-2 space-x-4 bg-slate-100 border border-slate-300 rounded justify-between p-4 w-full">
        <div className="flex flex-col space-y-2 text-sm no-wrap truncate">
          <div className="flex space-x-1">
            <span className="hidden md:flex">Taxonomy ID:</span>
            <span className="md:hidden flex">#</span>
            <span className="text-black">{id}</span>
          </div>
          <Link
            href={IUCN_RED_LIST_URI + scientific_name.replace(/\s/g, "%20")}
            className="flex space-x-1 "
          >
            <span className="hidden md:flex">Common Name:</span>
            <span className="text-black font-extrabold hover:text-red-600">
              {common_name}
            </span>
          </Link>
          <Link
            href={IUCN_RED_LIST_URI + scientific_name.replace(/\s/g, "%20")}
            className="flex space-x-1"
          >
            <span className="hidden md:flex">Scientific Name:</span>
            <span className="text-black font-bold hover:text-red-600">
              {scientific_name}
            </span>
          </Link>
          <Link
            href={WIKI_URI + COUNTRY_NAME.get(iso_code)}
            className="flex space-x-1 "
          >
            <span className="hidden md:flex">Country:</span>
            <span className="text-black font-bold hover:text-red-600">{`${getUnicodeFlagIcon(
              iso_code
            )} ${COUNTRY_NAME.get(iso_code)}`}</span>
          </Link>
        </div>
        <Link href={WIKI_URI + scientific_name.replace(/\s/g, "_")}>
          <Image
            src={imageUrl}
            width={110}
            height={110}
            alt=""
            className="rounded-full"
          />
        </Link>
        <Link
          href={WIKI_URI + CONSERVATION_STATUS.get(conservation_status)}
          className={`flex absolute top-8 right-8 text-sm items-center ${conservation_status} justify-center rounded-full w-8 h-8 font-bold`}
        >
          {conservation_status}
        </Link>
      </div>
    </div>
  );
};

export default SpeciesItem;
