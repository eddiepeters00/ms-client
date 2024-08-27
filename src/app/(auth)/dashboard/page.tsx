import Layout from "@/components/layout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  const token = cookies().get("token");
  if (!token) redirect("/");
  return (
    <Layout>
      <p>Welcome to dashboard, you are now authenticated and signed in</p>
    </Layout>
  );
}
