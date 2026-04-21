import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";
import { ICabin } from "@/app/_types/cabins.types";

export async function GET(
  request: Request,
  { params }: { params: { cabinId: string } },
) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates]: [ICabin, any] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: "Cabin not found" }, { status: 404 });
  }
}
