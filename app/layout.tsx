import { ReactNode } from "react";
import { Josefin_Sans } from "next/font/google";

import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import type { Metadata } from "next";
import { ReservationProvider } from "./_components/ReservationContext";
// import Uploader from "@/app/_data/Uploader";

const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },

  description:
    "Luxurious cabin hotel, located in the heart of nature, offering a unique blend of rustic charm and modern comfort. Experience tranquility and adventure in one unforgettable stay.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`bg-primary-950 text-primary-100 min-h-screen flex flex-col relative ${josefin.className}`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          {/* 
            In short
            This is the chain:
            body has full viewport height
            middle wrapper gets remaining height via flex-1
            adding grid makes <main> stretch to that height
            now inner h-full works
            The key idea

            grid helped here because it made the direct child stretch vertically.

            It was really this effect:

            without grid → <main> height = content height
            with grid → <main> height = stretched to fill parent
            -----------
            flex-1 => gives the content the full height 
            grid => makes the direct child stretch to the full height of the parent
            h-full => makes the main take the full height of its parent (the stretched div)
          */}
          <main className="max-w-7xl mx-auto w-full">
            {/* <Uploader /> */}
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>

        <footer>Copyright by the wild oasis</footer>
      </body>
    </html>
  );
}
