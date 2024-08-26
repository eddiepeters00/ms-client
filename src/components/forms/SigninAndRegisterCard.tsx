import { useState } from "react";
import { Card } from "../ui/card";
import RegisterForm from "./Register-form";
import SigninForm from "./Signin-form";
import { Button } from "../ui/button";

export default function SigninAndRegisterCard() {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  return (
    <Card>
      {!isFlipped ? <RegisterForm /> : <SigninForm />}

      <Button
        onClick={() => {
          setIsFlipped(!isFlipped);
        }}
      >
        {!isFlipped ? "Already a member? Sign in" : "Not a member? Register"}
      </Button>
    </Card>
  );
}
