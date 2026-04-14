import { Suspense } from "react";
import CabinList from "@/app/_components/CabinList";
import Spinner from "@/app/_components/Spinner";

// Caching and revalidation settings for the page
// revalidate number of seconds, default is 0 (no caching, always re-render on request)

// export const revalidate = 0; // This page will be rendered on every request, ensuring the latest data is always displayed.

export const revalidate = 3600; // Incremental Static Regeneration: This page will be revalidated and updated at most once every 1 hour to ensure the latest data is always displayed. This allows for a balance between performance and freshness of data, ensuring that users see relatively up-to-date information without the overhead of server-side rendering on every request.

export const metadata = {
  title: "Cabins",
};

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
