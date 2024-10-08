"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import fetchData from "@/lib/server-actions/fetch";
import redirectUser from "@/lib/server-actions/redirectUser";
import setSessionCookie from "@/lib/server-actions/set-session-cookie";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formSchema = z.object({
    username: z
      .string()
      .min(4)
      .max(20)
      .trim(),
    email: z
      .string()
      .email()
      .trim(),
    password: z
      .string()
      .min(8)
      .trim(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    //Handle registration
    let success = false;
    setIsLoading(true);
    try {
      const res = await fetchData({
        path: "http://127.0.0.1:3005/api/v1/services/registration",
        method: "post",
        data: values,
        cache: "no-store",
      });

      console.log("Fetched data: ", res);
      if (res.error) {
        throw res.data;
      } else {
        setSessionCookie(res.data);
        success = true;
      }

      if (success) redirectUser("/dashboard");
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="mt-10 bg-green-600 text-white"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <LoaderIcon /> : "Sign up"}
        </Button>
      </form>
    </Form>
  );
}
