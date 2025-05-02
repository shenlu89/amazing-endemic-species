"use client";
import SearchBar from "@/components/search-bar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useCallback, useState } from "react";
import SpeciesItem from "@/components/species-item";
import SortBy from "@/components/sort-by";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { BsSortDownAlt, BsSortUp } from "react-icons/bs";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export const runtime = "edge";

export default function Explore() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams?.get("q") || ""
  );
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams as any);
  let { data, isLoading }: any = useSWR(
    `/api/search?${params.toString()}`,
    fetcher,
    {
      keepPreviousData: true,
    }
  );

  const [sortType, setSortType] = useState<any>({ name: "Taxonomy ID" });
  const [sortDirection, setSortDirection] = useState<string>("desc");
  const createQueryString = useCallback(
    (queryParams: { name: string; value: string }[]) => {
      const params = new URLSearchParams(searchParams as any);
      queryParams.map((param) => {
        if (!param.value) {
          params.delete(param.name);
        } else {
          params.set(param.name, param.value);
        }
      });
      return params.toString();
    },
    [searchParams]
  );
  const onSearch = (event: FormEvent) => {
    event.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery || "");
    history.pushState(
      null,
      "",
      `${pathname}?${createQueryString([
        { name: "q", value: encodedSearchQuery },
      ])}`
    );
    router.push(
      `${pathname}?${createQueryString([
        { name: "q", value: encodedSearchQuery },
      ])}`
    );
  };
  return (
    <section className="flex flex-col h-full max-w-screen-lg container mx-auto relative items-start space-y-4">
      <form
        onSubmit={onSearch}
        className="flex flex-col md:flex-row w-full justify-between px-2"
      >
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="items-center space-x-2 hidden md:flex">
          <span>Sort by:</span>{" "}
          <SortBy
            sortType={sortType}
            setSortType={setSortType}
            sortDirection={sortDirection}
            setSortDirection={setSortDirection}
          />
        </div>
      </form>
      <div className="flex w-full justify-between px-2">
        <div>
          Found <span className="text-red-600">{data?.count || 0}</span>{" "}
          results.
        </div>
        <div className="flex items-center space-x-2">
          <div
            className="cursor-pointer text-red-600"
            onClick={() => {
              setSortDirection(sortDirection === "asc" ? "desc" : "asc");
              router.push(
                pathname +
                "?" +
                createQueryString([
                  {
                    name: "sortDirection",
                    value: sortDirection,
                  },
                ])
              );
            }}
          >
            {sortDirection === "desc" ? (
              <BsSortDownAlt title="Descending Order" className="w-6 h-6" />
            ) : (
              <BsSortUp title="Ascending Order" className="w-6 h-6" />
            )}
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="flex flex-wrap w-full">
          {new Array(10).fill(null).map((_, index) => (
            <div
              key={index}
              className="flex relative text-slate-600 items-center rounded md:w-1/2 w-full"
            >
              <div className="flex m-2 space-x-4 bg-slate-100 border border-slate-300 justify-between p-4 w-full">
                <div className="flex flex-col space-y-2 text-sm no-wrap truncate w-48">
                  <div className="flex animate-pulse h-5 bg-slate-300 w-36"></div>
                  <div className="flex animate-pulse h-5 bg-slate-200 w-full"></div>
                  <div className="flex animate-pulse h-5 bg-slate-300 w-full"></div>
                  <div className="flex animate-pulse h-5 bg-slate-200 w-36"></div>
                </div>
                <div className="w-[110px] h-[110px] rounded-full animate-pulse bg-slate-300"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap w-full">
          {!data?.results?.length && (
            <div className="flex flex-col mt-24 flex-1 text-lg text-slate-600 justify-center space-y-4 items-center">
              <HiMiniMagnifyingGlass className="w-10 h-10 p-2 bg-slate-200 dark:text-slate-600 rounded-full" />
              <div className="flex items-center">{`No endemic species found for "${searchQuery}".`}</div>
              <div className="loading">
                {new Array(4).fill(null).map((_, index) => (
                  <div key={index} className="paw">
                    <svg>
                      <use xlinkHref="#paw" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          )}
          {data?.results?.map((species: any) => {
            return (
              <SpeciesItem
                className="flex relative text-slate-600 items-center rounded md:w-1/2 w-full"
                key={species.id}
                species={species}
                imageUrl={`/images/${species.id}.jpg`}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
