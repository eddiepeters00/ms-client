import { cookies } from "next/headers";
import SigninForm from "../../components/forms/Signin-form";
import { redirect } from "next/navigation";

export default function Page() {
  const token = cookies().get("token");
  if (token) redirect("/dashboard");

  return <SigninForm />;
}
