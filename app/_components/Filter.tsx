"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);

    params.set("capacity", filter); // ?capacity=small, ?capacity=medium, ?capacity=large => pushed to the url as query params
    router.replace(`${pathname}?${params.toString()}`, { scroll: false }); // Update the URL with the new query parameters without causing a full page reload, and prevent automatic scrolling to the top of the page. // will not reload the page, but will update the URL and the searchParams, which will trigger a re-render of the component and the CabinList component will fetch the new data based on the new filter. The scroll: false option is used to prevent the page from scrolling to the top when the URL is updated, which can be a better user experience when filtering content on a page.
  }

  const activeFilter = searchParams.get("capacity") ?? "all";

  return (
    <div className="border border-primary-800">
      <FilterButton
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All Cabins
      </FilterButton>
      <FilterButton
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3
      </FilterButton>
      <FilterButton
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7
      </FilterButton>
      <FilterButton
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12
      </FilterButton>
    </div>
  );
}

function FilterButton({
  filter,
  handleFilter,
  activeFilter,
  children,
}: {
  children: React.ReactNode;
  filter: string;
  handleFilter: (filter: string) => void;
  activeFilter: string;
}) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${activeFilter === filter ? "bg-primary-700 text-primary-50" : ""}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
