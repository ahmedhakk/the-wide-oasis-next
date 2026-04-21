"use client";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { ICabin, ISettings } from "@/app/_types";
import { useReservation } from "./ReservationContext";

function DateSelector({
  settings,
  bookedDates,
  cabin,
}: {
  settings: ISettings;
  bookedDates: any;
  cabin: ICabin;
}) {
  const { range, setRange, resetRange } = useReservation();

  // CHANGE
  const regularPrice = 23;
  const discount = 23;
  const numNights = 23;
  const cabinPrice = 23;

  // Settings
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 bg-[#021b24] px-8 py-6">
        <DayPicker
          mode="range"
          min={minBookingLength}
          max={maxBookingLength}
          startMonth={new Date()}
          fromDate={new Date()}
          toYear={new Date().getFullYear() + 5}
          numberOfMonths={2}
          captionLayout="dropdown"
          className="rdp-custom"
          classNames={{
            root: "w-full",
            months: "flex justify-between gap-8",
            month: "w-full max-w-[240px]",
            caption: "mb-5 flex items-center justify-start",
            caption_label: "hidden",
            nav: "hidden",
            month_grid: "w-full border-collapse",
            weekdays: "",
            weekday:
              "pb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-300",
            week: "",
            day: "p-0 text-center",
            day_button:
              "h-9 w-9 rounded-full border-0 bg-transparent text-sm font-medium text-white transition hover:bg-accent-600",
            today: "font-semibold text-white",
            outside: "text-slate-600 opacity-30",
            disabled: "text-slate-600 opacity-30",
            hidden: "invisible",
            selected: "bg-accent-600 text-white rounded-full",
            range_start: "bg-accent-600 text-white rounded-full",
            range_end: "bg-accent-600 text-white rounded-full",
            range_middle: "bg-accent-600/40 text-white ",
            dropdowns: "flex items-center gap-2 justify-center",
            dropdown_root: "relative",
            dropdown:
              "appearance-none bg-transparent text-white text-sm font-semibold pr-6 pl-1 outline-none",
          }}
          selected={range}
          onSelect={setRange}
        />
      </div>

      <div className="flex min-h-[92px] items-center justify-between bg-[#c99759] px-8 text-[#17324a]">
        <div className="flex items-center gap-6">
          <p className="flex items-baseline gap-2">
            {discount > 0 ? (
              <>
                <span className="text-[42px] font-medium leading-none">
                  ${regularPrice - discount}
                </span>
                <span className="text-lg font-semibold line-through opacity-70">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-[42px] font-medium leading-none">
                ${regularPrice}
              </span>
            )}
            <span className="text-xl">/night</span>
          </p>

          {numNights ? (
            <>
              <p className="bg-[#b98649] px-6 py-4 text-[28px] font-semibold leading-none">
                × {numNights}
              </p>
              <p className="flex items-baseline gap-2">
                <span className="text-[20px] font-bold uppercase">Total</span>
                <span className="text-[28px] font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="border border-[#17324a] px-4 py-2 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
