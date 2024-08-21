import RegisterForm from "./components/forms/Register-form";
import SigninForm from "./components/forms/Signin-form";

export default function Page() {
  return (
    <main className="grid">
      <div className="grid place-content-center">
        <h3>Sign in</h3>
        <SigninForm />
      </div>

      <div className="grid place-content-center mt-20">
        <h3>Register</h3>
        <RegisterForm />
      </div>
    </main>
  );
}
