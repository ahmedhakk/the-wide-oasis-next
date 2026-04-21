"use client";
import { createContext, useContext, useState } from "react";
import type { DateRange } from "react-day-picker";

const ReservationContext = createContext({
  range: undefined as DateRange | undefined,
  setRange: (range: DateRange | undefined) => {},
  resetRange: () => {},
});

const initialState = {
  from: undefined,
  to: undefined,
};

function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [range, setRange] = useState<DateRange | undefined>(initialState);

  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

const useReservation = () => {
  const context = useContext(ReservationContext);

  if (!context) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
};

export { ReservationProvider, useReservation };
