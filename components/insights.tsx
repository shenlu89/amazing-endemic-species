"use client";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { API_URLS } from "@/lib/constant";
import Metric from "@/components/metric";

export default function Metrics() {
  const { data, isLoading } = useSWR(API_URLS, (urls) =>
    Promise.all(urls.map((url) => fetcher(url, {})))
  );

  const [species, countries, views] = data || [];

  return (
    <div className="flex h-6 space-x-4 items-center md:mt-12 mt-16 fixed text-fade">
      <Metric isLoading={isLoading} count={species?.count} label="Species" />
      <div className="flex h-full border-y-transparent border-l-transparent border border-r-slate-300"></div>
      <Metric
        isLoading={isLoading}
        count={countries?.count}
        label="Countries"
      />
      <div className="flex h-full border-y-transparent border-l-transparent border border-r-slate-300"></div>
      <Metric isLoading={isLoading} count={views?.total} label="Views" />
    </div>
  );
}
