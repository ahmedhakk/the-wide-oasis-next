import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { ICabin } from "@/app/_types";
import { Suspense } from "react";

// Static metadata (not dynamic)
// export const metadata = {
//   title: "Cabin Details",
//   description: "Discover the details of our cozy cabins in the Dolomites.",
// };

// Dynamic metadata generation based on cabin details
export async function generateMetadata({
  params,
}: {
  params: { cabinId: string };
}) {
  const { name }: ICabin = await getCabin(params.cabinId);

  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams() {
  const cabins: ICabin[] = await getCabins();

  const ids = cabins.map((cabin) => {
    return {
      cabinId: String(cabin.id),
    };
  });
  /*
  // console.log(ids);
    [
      { cabinId: '19' },
      { cabinId: '20' },
      { cabinId: '21' },
      { cabinId: '22' },
      { cabinId: '23' },
      { cabinId: '24' },
      { cabinId: '25' },
      { cabinId: '26' }
    ]
  */

  return ids;
}

export default async function Page({
  params,
}: {
  params: { cabinId: string };
}) {
  const cabin: ICabin = await getCabin(params.cabinId);

  const { name } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
