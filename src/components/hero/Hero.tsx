import { Overpass } from "next/font/google";
import React from "react";
import { twMerge } from "tailwind-merge";

const Font = Overpass({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <section className={twMerge("text-center text-white flex flex-col gap-10 justify-center items-center py-32", Font.className)}>
      <div>
        <h1 className="heading-3 md:heading-1">A modern publishing platform</h1>
        <p className="text-lg md:text-xl ">
          Grow your audience and build your online brand
        </p>
      </div>

      <div className="inline-flex gap-4">
        <button className="btn btn-primary">Start for Free</button>
        <button className="btn btn-secondary text-center">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
