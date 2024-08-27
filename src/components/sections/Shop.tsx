"use client";

import Image from "next/image";
import { Button } from "../ui/button";
export default function Shop() {
  return (
    <>
      <div className="grid items-center justify-between h-full md:grid-cols-2">
        <div className="max-w-[500px] grid m-10 gap-6 text-orange-400">
          <h3 className="font-bold text-3xl">See it, make it, try it, do it</h3>
          <p>
            The best part of HealthyCravings is discovering new recipies from
            people all around the world.
          </p>
          <Button className="w-32 font-bold rounded-3xl text-white bg-orange-400">
            Explore
          </Button>
        </div>
        <Image
          className="object-contain w-full md:h-full md:w-[50vw] md:object-cover md:shadow-md"
          width="500"
          height="200"
          src="/woman_eating_sallad.jpg"
          alt="A wooden plate filled with different vegetables, friuts, cheese and meat."
        />
      </div>
    </>
  );
}
