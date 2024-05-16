import Link from "next/link";
import React from "react";

import amazingSpecies from "@/data/amazing-species.json";
import { Metadata } from "next";
import { apiPage } from "@/data/meta-data";
import CustomPre from "@/components/custom-pre";

export const metadata: Metadata = apiPage.metadata;

export default function API() {
  return (
    <article className="flex flex-col max-w-screen-md container mx-auto justify-center relative prose">
      <h1>API Reference</h1>
      <p>
        {`The data in the Amazing Endemic Species API is compiled and released
        based on information from the IUCN Red List API. It gathers ${
          amazingSpecies.length
        }
        endemic species from ${
          new Set(amazingSpecies.map((item) => item.code)).size
        } different countries and regions until now.`}
      </p>
      <ul>
        {apiPage.apis.map((apis, index) => (
          <li key={index}>
            <Link href={`#${apis}`}>
              {apis[0].toUpperCase() + apis.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <h2 id="random">Random</h2>
      <p>To get a species randomly:</p>
      <CustomPre>/api/v1/random</CustomPre>
      <Link href="/api/v1/random" target="_blank">
        Example: Random species
      </Link>
      <hr />
      <h2 id="species">Species</h2>
      <p>To get all species:</p>
      <CustomPre>/api/v1/species</CustomPre>
      <Link href="/api/v1/species" target="_blank">
        Example: All species
      </Link>
      <hr />
      <h2 id="speciescount">Species Count</h2>
      <p>To get total count of species:</p>
      <CustomPre>/api/v1/speciescount</CustomPre>
      <Link href="/api/v1/speciescount" target="_blank">
        Example: Total count of species
      </Link>
      <hr />
      <h2 id="country">Country</h2>
      <p>To get all ISO code of countries and regions:</p>
      <CustomPre>/api/v1/country</CustomPre>
      <Link href="/api/v1/country" target="_blank">
        Example: All ISO code of countries and regions
      </Link>
      <hr />
      <h2 id="countrycount">Country Count</h2>
      <p>To get total count of countries and regions:</p>
      <CustomPre>/api/v1/countrycount</CustomPre>
      <Link href="/api/v1/countrycount" target="_blank">
        Example: Total count of countries and regions
      </Link>
      <hr />
      <h2 id="version">Version</h2>
      <p>
        To check what version of Amazing Endemic Species is driving the API:
      </p>
      <CustomPre>/api/v1/version</CustomPre>
      <p>
        <Link href="/api/v1/version" target="_blank">
          Example: API reference version
        </Link>
      </p>
    </article>
  );
}
