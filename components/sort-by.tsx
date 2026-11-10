"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SORT_TYPES } from "@/lib/constant";

const sortTypes = [
  { name: "Taxonomy ID" },
  { name: "Common Name" },
  { name: "Scientific Name" },
  { name: "Country" },
];

export default function Sortby({ children, ...props }: any) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { sortType, setSortType } = props;
  const createQueryString = useCallback(
    (queryParams: { name: string; value: string }[]) => {
      const params = new URLSearchParams(searchParams as any);
      queryParams.forEach((param) => {
        if (!param.value) {
          params.delete(param.name);
        } else {
          params.set(param.name, param.value);
        }
      });
      return params.toString();
    },
    [searchParams],
  );
  return (
    <div className="flex md:w-40 w-full z-50 relative">
      <Select
        value={sortType.name}
        onValueChange={(val: string) => {
          const st = sortTypes.find((t) => t.name === val) || sortTypes[0];
          setSortType(st);
          router.push(
            pathname +
              "?" +
              createQueryString([
                {
                  name: "sortType",
                  value: SORT_TYPES.get(st.name) as string,
                },
              ]),
          );
        }}
      >
        <SelectTrigger className="relative w-full cursor-pointer rounded border border-slate-300 bg-white py-2 pl-3 pr-10 text-left text-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 data-[size=default]:h-auto [&>svg]:absolute [&>svg]:right-2 [&>svg]:top-1/2 [&>svg]:-translate-y-1/2 [&>svg]:size-5 [&>svg]:text-slate-400 [&>svg]:transition-[rotate] data-popup-open:[&>svg]:rotate-180">
          <SelectValue />
        </SelectTrigger>
        <SelectContent
          className="max-h-60 overflow-auto rounded border border-slate-300 bg-white p-0 text-base shadow-none ring-0 focus:outline-none sm:text-sm text-black"
          align="start"
          alignItemWithTrigger={false}
          sideOffset={4}
        >
          {sortTypes.map((person, personIdx) => (
            <SelectItem
              key={personIdx}
              value={person.name}
              className="relative cursor-pointer select-none rounded-none py-2 pl-3 pr-3 text-sm font-normal text-black data-highlighted:bg-red-50 data-highlighted:text-red-500 data-selected:bg-red-100 data-selected:text-red-500 [&_[data-slot=select-item-indicator]]:hidden!"
            >
              {person.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
