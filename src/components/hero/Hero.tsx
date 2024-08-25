"use client";

import RollingText from "./RollingText";

export default function Hero() {
  return (
    <>
      <div className="mt-[10%] font-extrabold gap-4 text-center text-3xl sm:text-5xl h-full">
        <h2>Are you craving</h2>
        <RollingText />
      </div>
    </>
  );
}
