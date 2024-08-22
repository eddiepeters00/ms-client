"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky flex w-full items-center justify-between px-8 h-[5rem]">
      <Image className="" alt="HealthyCravings" src="" />
      <div className="flex gap-10 mx-10">
        <Link
          className="bg-green-600 text-white font-bold py-2 px-4 rounded-2xl"
          href="signin"
        >
          Log in
        </Link>
        <Link
          className="text-black font-bold p-2 px-4 rounded-2xl"
          href="register"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}
