import { ICabin } from "@/app/_types";
import { getCabins } from "@/app/_lib/data-service";
import CabinCard from "@/app/_components/CabinCard";
// import { unstable_noStore as noStore } from "next/cache";

export default async function CabinList() {
  // noStore(); // This component will not be cached, ensuring that it always fetches the latest data on each request.
  const cabins: ICabin[] = await getCabins();

  if (!cabins.length) return null;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
