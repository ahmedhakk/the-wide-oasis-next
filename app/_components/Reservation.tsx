import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import LoginMessage from "@/app/_components/LoginMessage";
import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";
import { ICabin, ISettings } from "@/app/_types";
import { auth } from "@/app/_lib/auth";

export default async function Reservation({ cabin }: { cabin: ICabin }) {
  const [settings, bookedDates]: [ISettings, any] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();

  return (
    <>
      {/* <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
          <DateSelector />
          <ReservationForm />
          </div> */}
      <div className="grid min-h-[400px] grid-cols-[minmax(0,1fr)_minmax(0,1fr)] border border-primary-800">
        <div className="min-w-0 border-r border-primary-800">
          <DateSelector
            settings={settings}
            bookedDates={bookedDates}
            cabin={cabin}
          />
        </div>

        <div className="min-w-0">
          {session?.user ? (
            <ReservationForm cabin={cabin} user={session.user} />
          ) : (
            <LoginMessage />
          )}
        </div>
      </div>
    </>
  );
}
