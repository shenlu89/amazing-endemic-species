"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { HiCheck, HiChevronUp, HiChevronDown } from "react-icons/hi2";
import { SORT_TYPES } from "@/lib/constant";
import { useCallback } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const sortTypes = [
  { name: "IUCN Red List ID" },
  { name: "Common Name" },
  { name: "Scientific Name" },
  { name: "ISO Code" },
];

export default function Sortby({ children, ...props }: any) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams as any);
  const { sortType, setSortType } = props;
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
  return (
    <div className="flex md:w-40 w-full z-50 relative">
      <Listbox
        value={sortType}
        onChange={(st) => {
          setSortType(st);
          router.push(
            pathname +
              "?" +
              createQueryString([
                {
                  name: "sortType",
                  value: SORT_TYPES.get(st.name),
                },
              ])
          );
        }}
      >
        {({ open }) => (
          <div className="relative w-full">
            <ListboxButton className="relative w-full cursor-pointer rounded border bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{sortType.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                {open ? (
                  <HiChevronUp
                    className="h-5 w-5 text-slate-400"
                    aria-hidden="true"
                  />
                ) : (
                  <HiChevronDown
                    className="h-5 w-5 text-slate-400"
                    aria-hidden="true"
                  />
                )}
              </span>
            </ListboxButton>
            <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-white text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {sortTypes.map((person, personIdx) => (
                <ListboxOption
                  key={personIdx}
                  className={({ focus, selected }) =>
                    `relative cursor-pointer select-none py-2 pl-3
                       ${focus && !selected && "bg-red-50"} ${
                      selected && "bg-red-100"
                    }`
                  }
                  value={person}
                >
                  {({ focus, selected }) => (
                    <>
                      <span
                        className={`block ${
                          selected ? "text-red-500" : "font-normal"
                        } ${focus ? "text-red-500" : "text-black"}`}
                      >
                        {person.name}
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-red-500">
                          <HiCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        )}
      </Listbox>
    </div>
  );
}
