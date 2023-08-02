import Appbar from "@/components/appbar/Appbar";
import React from "react";
import { Ubuntu } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Hero from "@/components/hero/Hero";

const Inter = Ubuntu({
  weight : ["300", "400", "500", "700"],
  subsets : ["latin"]
})

export default function Home() {
  return (
    <React.Fragment>
      <header className={twMerge("bg-pattern px-6 py-14  lg:px-40 lg:py-16 rounded-bl-[100px]", Inter.className)}>
        <Appbar  />
        <Hero/>
      </header>
      <main></main>
    </React.Fragment>
  );
}
