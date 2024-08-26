"use client";

import Image from "next/image";
import { Button } from "../ui/button";
export default function Search() {
  return (
    <>
      <div className="grid items-center justify-between h-full md:grid-cols-2">
        <div className="max-w-[500px] grid m-10 gap-6 text-pink-600">
          <h3 className="font-bold text-3xl">Search for an idea</h3>
          <p>
            What do you want to try next? Think of something you&apos;re into -
            like <q>Easy fresh sallad</q> - and see what you find.
          </p>
          <Button className="w-32 font-bold rounded-3xl text-white bg-pink-600">
            Explore
          </Button>
        </div>
        <Image
          className="object-contain md:h-full md:w-[50vw] md:object-cover md:shadow-md"
          width="500"
          height="200"
          src="/food_platter.jpg"
          alt="A wooden plate filled with different vegetables, friuts, cheese and meat."
        />
      </div>
    </>
  );
}
