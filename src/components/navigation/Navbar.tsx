"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white flex w-full items-center justify-between h-[5rem]">
      <Link href="/" className="mx-10 text-2xl font-bold text-green-600">
        HealthyCravings
      </Link>
      <div className="flex items-center gap-2">
        <Link
          className="bg-green-600 text-white text-nowrap font-bold rounded-2xl px-2 py-1"
          href="signin"
        >
          Log in
        </Link>
        <Link
          className="text-black text-nowrap font-bold rounded-2xl px-2 py-1"
          href="register"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}
