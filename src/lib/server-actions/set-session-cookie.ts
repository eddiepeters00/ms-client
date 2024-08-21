"use server";

import { cookies } from "next/headers";

export default async function setSessionCookie({
  data,
}: {
  data: { token: string; email: string; username: string };
}) {
  cookies().set("token", data.token);
  cookies().set("username", data.username);
  cookies().set("email", data.email);
}
