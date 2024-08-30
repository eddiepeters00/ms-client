"use client";

import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SigninAndRegisterCard from "../forms/SigninAndRegisterCard";
import { useEffect, useState } from "react";
import getSessionCookie from "@/lib/server-actions/get-session-cookie";
import { Avatar, AvatarFallback } from "../ui/avatar";
import deleteSessionCookie from "@/lib/server-actions/delete-session-cookie";

export default function Navbar() {
  const [auth, setAuth] = useState<boolean>(false);
  useEffect(() => {
    const checkAuth = async () => {
      const user = await getSessionCookie();
      if (user) setAuth(true);
    };

    checkAuth();
  });

  return (
    <nav className="sticky top-0 bg-white flex w-full items-center justify-between h-[5rem]">
      <Link href="/" className="mx-10 text-2xl font-bold text-green-600">
        HealthyCravings
      </Link>

      <div className="flex items-center gap-2 mx-10">
        {auth ? (
          <>
            <Avatar className="mx-10">
              <AvatarFallback>{}</AvatarFallback>
            </Avatar>
            <Link
              href={"/"}
              onClick={async () => {
                await deleteSessionCookie();
                setAuth(false);
              }}
            >
              Sign out
            </Link>
          </>
        ) : (
          <>
            <Dialog>
              <DialogTitle hidden>Log in</DialogTitle>
              <DialogDescription hidden>Log in to dashboard</DialogDescription>
              <DialogTrigger className="bg-green-600 text-white text-nowrap font-bold rounded-2xl px-2 py-1">
                Log in
              </DialogTrigger>
              <DialogContent>
                <SigninAndRegisterCard startCard="login" />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTitle hidden>Sign up</DialogTitle>
              <DialogDescription hidden>
                Sign up to create an account
              </DialogDescription>
              <DialogTrigger className="text-black text-nowrap font-bold rounded-2xl px-2 py-1">
                Sign up
              </DialogTrigger>
              <DialogContent>
                <SigninAndRegisterCard startCard="signUp" />
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>
    </nav>
  );
}
