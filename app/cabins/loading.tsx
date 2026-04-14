import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200 mt-4">Loading cabin data...</p>
    </div>
  );
}
