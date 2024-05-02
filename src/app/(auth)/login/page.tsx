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
import { Heading, Paragraph } from "@/components/ui/typography";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { login } from "./actions";
import { LoginSchema } from "./form-schema";

export default function LoginPage() {
  const { mutate, error, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: LoginSchema) => {
      const { error, success } = await login(data);
      if (error) {
        throw new Error(error);
      }
      return success;
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const form = useForm<LoginSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginSchema) {
    mutate(values);
  }

  return (
    <section>
      <div className="container flex flex-col items-center min-h-svh py-20 justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full max-w-lg"
          >
            <div>
              <Heading>Login</Heading>
              <Paragraph>Login to your account</Paragraph>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="youremail@xyz.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Enter your personal email</FormDescription>
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
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter a strong password with atleast 8 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isPending} type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
