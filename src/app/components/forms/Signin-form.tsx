"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import setSessionCookie from "@/lib/server-actions/set-session-cookie";
import redirectUser from "@/lib/server-actions/redirectUser";
import fetchData from "@/lib/server-actions/fetch";

export default function SigninForm() {
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    //Handle signin
    let success = false;
    try {
      const res = await fetchData({
        path: "http://127.0.0.1:3005/api/v1/services/auth",
        method: "POST",
        data: values,
        cache: "no-store",
      });

      console.log(res);
      if (res.error) throw res.data;
      if (res.data.token === "missing parameter: token") {
        throw new Error("Invalid password");
      } else {
        setSessionCookie({ data: res.data });
        success = true;
      }
    } catch (error) {
      console.error(error);
    }

    if (success) redirectUser("/dashboard");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
          name="email"
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
        <Button type="submit">Sign in</Button>
      </form>
    </Form>
  );
}
