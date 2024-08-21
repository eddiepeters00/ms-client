import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import RegisterForm from "../../components/forms/Register-form";

export default function Page() {
  const token = cookies().get("token");
  if (token) redirect("/dashboard");

  return <RegisterForm />;
}
