"use client";

import SigninAndRegisterCard from "../forms/SigninAndRegisterCard";

export default function Bottom() {
  return (
    <>
      <div className="grid items-center justify-between h-full md:grid-cols-2">
        <div className="max-w-[500px] grid m-10 gap-6 text-orange-400">
          <h3 className="font-bold text-3xl">
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
