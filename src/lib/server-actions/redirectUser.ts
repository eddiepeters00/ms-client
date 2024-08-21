"use server";
import { redirect } from "next/navigation";

export default async function redirectUser(path: string) {
  redirect(path);
}
