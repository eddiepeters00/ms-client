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
    username: z.string(),
    password: z.string().min(8),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    //Handle signin
    let success = false;
    try {
      const res = await fetchData({
        path: "http://127.0.0.1:3005/api/v1/services/auth",
        method: "post",
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
        <Button className="mt-10 bg-green-600 text-white" type="submit">
          Log in
        </Button>
      </form>
    </Form>
  );
}
