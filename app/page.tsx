"use client";
import { geoOrthographic, interpolate, geoCentroid, geoPath, select } from "d3";
import { feature } from "topojson-client";
import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import fetcher from "@/lib/fetcher";
import useSWR, { useSWRConfig } from "swr";
import { random } from "@/lib/utils";
import Image from "next/image";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import {
  COUNTRY_NAME,
  CONSERVATION_STATUS,
  WIKI_URI,
  IUCN_RED_LIST_URI,
  ISO_MAP,
  WORLD_110M,
} from "@/lib/constant";
import Link from "next/link";
import Insights from "@/components/insights";

export default function Home() {
  const [isMounted, setMounted] = useState(false);
  const [species, setSpecies] = useState({
    image: "",
    name: "",
    status: "",
    code: "",
    commonName: "",
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  const svgRef = useRef<any>(null);
  const width = 540;
  const height = 540;

  const { mutate } = useSWRConfig();
  const { data, error, isLoading }: any = useSWR(WORLD_110M, fetcher, {
    revalidateOnMount: true,
  });

  let {
    data: _species,
    isLoading: _loading,
    error: _error,
  }: any = useSWR("/api/v1/random", fetcher);

  const titeRef = useRef<any>(null);

  const handleAnimationEnd = useDebouncedCallback(() => {
    if (titeRef.current) {
      titeRef.current.textContent =
        "Mapping amazing endemic species all over the world";
    }
  }, 1000);

  const indexOfCountries = (specie: any, countries: any) => {
    const code = ISO_MAP.get(specie.code);
    if (code === 156) {
      return [30, 163];
    }
    for (let i = 0, len = countries.length; i < len; i++) {
      if (countries[i].id === code) {
        return [i];
      }
    }
    return [0];
  };

  const projection = geoOrthographic()
    .scale(height / 2)
    .translate([width / 2, height / 2])
    .clipAngle(180)
    .rotate([0, 0, 23.44]);
  const path = geoPath().projection(projection);

  useEffect(() => {
    if (!data || isLoading || _loading) return;

    const { features: countries }: any = feature(data, data.objects.countries);
    const earth = select(svgRef.current);
    earth
      .selectAll()
      .data(countries)
      .enter()
      .append("path")
      .transition()
      .delay((_, i) => i * 10)
      .attr("d", (d: any) => path(d))
      .transition()
      .delay(300)
      .attr("class", "back");

    earth
      .append("circle")
      .style("fill", "#f8fafc")
      .style("opacity", 0.7)
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", projection.scale());

    projection.clipAngle(90);

    earth
      .selectAll()
      .data(countries)
      .enter()
      .append("path")
      .transition()
      .delay((_, i) => i * 10)
      .attr("d", (d: any) => path(d))
      .transition()
      .delay(300)
      .attr("class", "front")
      .transition()
      .delay(3500)
      .on("end", step);

    function step() {
      const index = indexOfCountries(_species, countries);

      earth
        .selectAll(".front")
        .transition()
        .style("fill", (_, i) => (index.includes(i) ? "#dc2626" : "#64748b"));

      earth
        .transition()
        .call(async () => {
          setSpecies(_species);
          setIsLoaded(false);
          _species = await mutate("/api/v1/random");
        })
        .delay(100)
        .duration(1000)
        .tween("rotate", () => {
          const point = geoCentroid(countries[index[0]]);
          const rotate: any = interpolate(projection.rotate(), [
            -point[0],
            -point[1],
            23.44,
          ]);
          return (t) => {
            projection.rotate(rotate(t)).clipAngle(180);
            earth.selectAll(".back").attr("d", (d: any) => path(d));
            projection.rotate(rotate(t)).clipAngle(90);
            earth.selectAll(".front").attr("d", (d: any) => path(d));
          };
        })
        .transition()
        .delay(3500)
        .on("end", step);
    }
    setMounted(true);
    return () => {
      earth.interrupt();
    };
  }, [data, error, isLoading, _loading, mutate]);
  if (error) return <div>Fail to load!</div>;
  if (isLoading && !isMounted)
    return (
      <div className="relative h-full">
        <div className="loading">
          {new Array(4).fill(null).map((_, index) => (
            <div key={index} className="paw">
              <svg>
                <use xlinkHref="#paw" />
              </svg>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center h-full text-lg">
          Loading...
        </div>
      </div>
    );
  return (
    <div className="flex justify-center flex-1">
      <h2
        ref={titeRef}
        className="text-xl font-bold text-center fixed px-4"
        onAnimationEnd={handleAnimationEnd}
      >
        {Array.from("Mapping amazing endemic species all over the world").map(
          (char, index) => (
            <div
              style={{
                animationDelay: `${index * 15}ms`,
                transform: `translate3d(${random(-300, 300) | 0}px, ${
                  random(-300, 300) | 0
                }px, ${random(-300, 300) | 0}px)`,
              }}
              className={`text-fly-in transform-gpu ${
                char === " " ? "inline" : "inline-block"
              }`}
              key={index}
            >
              {char}
            </div>
          )
        )}
      </h2>
      {process.env.NODE_ENV === "production" && <Insights />}
      <div className="flex flex-col justify-center items-center space-y-2 fixed md:mt-24 mt-[6.5rem]">
        <div className="relative">
          <Link
            href={WIKI_URI + species.name.replace(/\s/g, "_")}
            target="_blank"
          >
            <Image
              src={species.image}
              width={130}
              height={130}
              alt=""
              className={`rounded-full shadow ${
                species.image || "opacity-0"
              }  ${isLoaded || "blur-sm"}`}
              onLoad={handleImageLoad}
              priority
            />
          </Link>
          {!_loading && (
            <Link
              href={WIKI_URI + CONSERVATION_STATUS.get(species.status)}
              target="_blank"
              className={`flex absolute top-0 right-0 text-sm items-center ${species.status} justify-center rounded-full w-8 h-8 font-bold`}
            >
              {species.status}
            </Link>
          )}
        </div>
        {!_loading || !species.name ? (
          <div className="flex flex-col items-center space-y-1">
            <Link
              href={IUCN_RED_LIST_URI + species.name.replace(/\s/g, "%20")}
              target="_blank"
              className="font-bold text-lg hover:text-red-600"
            >
              {species.commonName}
            </Link>
            <Link
              href={IUCN_RED_LIST_URI + species.name.replace(/\s/g, "%20")}
              target="_blank"
              className="hover:text-red-600"
            >
              {species.name}
            </Link>
            <Link
              href={WIKI_URI + COUNTRY_NAME.get(species.code)}
              target="_blank"
              className="hover:text-red-600"
            >{`${species.code && getUnicodeFlagIcon(species.code)} ${
              species.code && COUNTRY_NAME.get(species.code)
            }`}</Link>
          </div>
        ) : (
          <div className="text-lg p-2">Loading...</div>
        )}
      </div>
      <svg
        className="fixed earth md:w-[540px] w-96"
        preserveAspectRatio="xMidYMin meet"
        viewBox={`0 0 ${width} ${height}`}
        ref={svgRef}
      ></svg>
    </div>
  );
}
