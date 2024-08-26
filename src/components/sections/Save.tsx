"use client";

import Image from "next/image";
import { Button } from "../ui/button";
export default function Save() {
  return (
    <>
      <div className="grid items-center justify-between h-full md:grid-cols-2">
        <div>Images here</div>
        <div className="max-w-[500px] grid m-10 gap-6 text-sky-700">
          <h3 className="font-bold text-3xl">Save your favorite recipies</h3>
          <p>
            Never loose a good recipe again. Find something you like then save
            it for later!
          </p>
          <Button className="w-32 font-bold rounded-3xl text-white bg-sky-700">
            Explore
          </Button>
        </div>
      </div>
    </>
  );
}
