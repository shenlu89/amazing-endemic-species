import { FormEvent, useRef, useCallback, useEffect } from "react";

import { HiOutlineMagnifyingGlass, HiXCircle } from "react-icons/hi2";
import { usePathname, useRouter } from "next/navigation";
import useKeyPress from "@/hooks/use-key-press";

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  searchParams,
}: any) {
  const searchInput = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();

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

  useEffect(() => {
    setSearchQuery(searchParams ? searchParams["q"] : "");
  }, [searchParams, setSearchQuery]);

  const clearSearch = (event: FormEvent) => {
    event.preventDefault();
    setSearchQuery("");
    searchInput.current?.focus();
    router.push(`${pathname}?${createQueryString([{ name: "q", value: "" }])}`);
  };
  const handleKeyPress = useCallback((event: any) => {
    event.preventDefault();
    searchInput.current?.focus();
  }, []);

  useKeyPress(["/"], handleKeyPress);
  useKeyPress(["Escape"], clearSearch);
  return (
    <div className="flex relative md:w-[28rem] w-full">
      <input
        ref={searchInput}
        value={decodeURI(searchQuery || "")}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="pl-10 pr-4 py-2 w-full text-sm bg-white border focus:bg-slate-100 rounded focus:outline-none placeholder:text-slate-400"
        placeholder={`Type "/" to search endemic species by names and ISO code.`}
      />
      <HiOutlineMagnifyingGlass className="absolute text-slate-400 top-1/2 transform translate-y-[-50%] left-3 w-5 h-5" />
      <HiXCircle
        onClick={clearSearch}
        className={`${
          searchQuery || "hidden"
        } absolute top-1/2 transform translate-y-[-50%] right-3 w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-600`}
      />
    </div>
  );
}
