"use client";

import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SigninAndRegisterCard from "../forms/SigninAndRegisterCard";
import { useEffect, useState } from "react";
import getSessionCookie from "@/lib/server-actions/get-session-cookie";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Navbar() {
  const [userName, setUserName] = useState<string>("");
  useEffect(() => {
    const checkAuth = async () => {
      const user = await getSessionCookie();
      if (user) setUserName(user.name);
    };

    checkAuth();
  }, []);

  return (
    <nav className="sticky top-0 bg-white flex w-full items-center justify-between h-[5rem]">
      <Link href="/" className="mx-10 text-2xl font-bold text-green-600">
        HealthyCravings
      </Link>

      {userName !== "" ? (
        <Avatar className="mx-10">
          <AvatarFallback>{userName}</AvatarFallback>
        </Avatar>
      ) : (
        <div className="flex items-center gap-2 mx-10">
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
      )}
    </nav>
  );
}
