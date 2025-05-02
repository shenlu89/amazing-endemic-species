import Link from "next/link";

export default function AddMoreSpecies() {
  return (
    <Link
      className="md:flex hidden hover:opacity-75 text-sm text-white bg-red-600 py-2 px-4 items-center rounded-full space-x-2 font-bold"
      href="https://github.com/shenlu89/amazing-endemic-species/issues/new?assignees=shenlu89&labels=add-more-species&projects=&template=add_more_species.md&title=%5BAdd+More+Species%5D"
      target="_blank"
    >
      <span>Add More Species</span>
    </Link>
  );
}
