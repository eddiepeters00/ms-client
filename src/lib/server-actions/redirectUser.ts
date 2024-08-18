"use server";
import { redirect } from "next/navigation";

export default function redirectUser(path: string) {
  redirect(path);
}
