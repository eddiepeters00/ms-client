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

type StartCard = "login" | "signUp";
export default function SigninAndRegisterCard({
  startCard = "login",
}: {
  startCard: StartCard;
}) {
  const [isFlipped, setIsFlipped] = useState<StartCard>(startCard);

  return (
    <Card className="max-w-[600px] text-green-600 border-none">
      <CardHeader>
        <CardTitle>{isFlipped === "login" ? "Log in" : "Sign up"}</CardTitle>
      </CardHeader>
      <CardContent>
        {isFlipped === "login" ? <SigninForm /> : <RegisterForm />}
      </CardContent>

      <CardFooter>
        <Button
          variant={"link"}
          onClick={() => {
            setIsFlipped(isFlipped === "login" ? "signUp" : "login");
          }}
        >
          {isFlipped === "login" ? "Not a member?" : "Already a member?"}
        </Button>
      </CardFooter>
    </Card>
  );
}
