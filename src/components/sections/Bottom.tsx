"use client";

import SigninAndRegisterCard from "../forms/SigninAndRegisterCard";

export default function Bottom() {
  return (
    <>
      <div className="grid place-content-center h-full md:grid-cols-2">
        <div className="max-w-[500px] place-self-center text-orange-400">
          <h3 className="font-bold px-10 pt-5 text-xl md:text-4xl">
            Sign up and find your next favorites
          </h3>
        </div>
        <div className="p-10">
          <SigninAndRegisterCard />
        </div>
      </div>
    </>
  );
}
