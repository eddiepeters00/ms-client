"use client";

import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SigninForm from "../forms/Signin-form";
import SigninAndRegisterCard from "../forms/SigninAndRegisterCard";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white flex w-full items-center justify-between h-[5rem]">
      <Link href="/" className="mx-10 text-2xl font-bold text-green-600">
        HealthyCravings
      </Link>
      <div className="flex items-center gap-2">
        <Dialog>
          <DialogTrigger className="bg-green-600 text-white text-nowrap font-bold rounded-2xl px-2 py-1">
            Log in
          </DialogTrigger>
          <DialogContent>
            <SigninAndRegisterCard startCard="login" />
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger className="text-black text-nowrap font-bold rounded-2xl px-2 py-1">
            Sign up
          </DialogTrigger>
          <DialogContent>
            <SigninAndRegisterCard startCard="signUp" />
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
}
