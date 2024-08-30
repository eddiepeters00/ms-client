import { Button } from "@/components/ui/button";
import deleteSessionCookie from "@/lib/server-actions/delete-session-cookie";
import fetchData from "@/lib/server-actions/fetch";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const token = cookies().get("token");
  if (!token) redirect("/");

  return <main></main>;
}
