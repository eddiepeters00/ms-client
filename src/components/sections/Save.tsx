"use client";

import Image from "next/image";
import { Button } from "../ui/button";
export default function Save() {
  return (
    <>
      <div className="grid items-center h-full md:grid-cols-2">
        <Image
          className="object-contain w-full md:h-full md:w-[50vw] md:object-cover md:shadow-md"
          width="500"
          height="200"
          src="/sallad_wooden_plate.jpg"
          alt="A wooden plate filled with different vegetables, friuts, cheese and meat."
        />
        <div className="max-w-[500px] grid gap-6 place-self-center text-sky-700 ">
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
