import Link from "next/link";
import React, { useEffect, useRef } from "react";

import amazingSpecies from "@/data/amazing-species.json";

export default function About() {
  return (
    <div className="flex flex-col max-w-screen-md container mx-auto justify-center relative prose">
      <h1>Amazing Endemic Species API</h1>
      <p>
        {`The data in the Amazing Endemic Species API is compiled and released
        based on information from the IUCN Red List API. It gathers ${
          amazingSpecies.length
        }
        endemic species from ${
          new Set(amazingSpecies.map((item) => item.code)).size
        } different countries and regions until now.`}
      </p>
    </div>
  );
}
