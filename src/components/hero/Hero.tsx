"use client";

import RollingText from "./RollingText";

export default function Hero() {
  return (
    <div className="grid place-content-center mt-20 font-extrabold text-5xl gap-4 text-center">
      <h2>Are you craving</h2>
      <RollingText />
    </div>
  );
}
