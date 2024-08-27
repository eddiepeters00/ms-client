import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import RegisterForm from "./Register-form";
import SigninForm from "./Signin-form";
import { Button } from "../ui/button";

export default function SigninAndRegisterCard() {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  return (
    <Card className="max-w-[600px] text-green-600">
      <CardHeader>
        <CardTitle>{!isFlipped ? "Sign up" : "Log in"}</CardTitle>
      </CardHeader>
      <CardContent>
        {!isFlipped ? <RegisterForm /> : <SigninForm />}
      </CardContent>

      <CardFooter>
        <Button
          variant={"link"}
          onClick={() => {
            setIsFlipped(!isFlipped);
          }}
        >
          {!isFlipped ? "Already a member?" : "Not a member?"}
        </Button>
      </CardFooter>
    </Card>
  );
}
