import fetchData from "@/lib/server-actions/fetch";
import getSessionCookie from "@/lib/server-actions/get-session-cookie";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const token = cookies().get("token");
  if (!token) redirect("/");

  const sessionData = await getSessionCookie();
  try {
    const res = await fetchData({
      path: "http://127.0.0.1:3005/api/v1/services/user",
      method: "post",
      data: sessionData,
      cache: "no-store",
    });

    console.log(res);
    if (res.error) throw res.data;
    if (res.data.token === "missing parameter: token") {
      throw new Error("Invalid password");
    }
  } catch (error) {
    console.error(error);
  }

  console.log(sessionData);
  return <main></main>;
}
