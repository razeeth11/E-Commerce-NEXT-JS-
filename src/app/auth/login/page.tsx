"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginContact = z
  .string()
  .trim()
  .refine(
    (value) =>
      /^[0-9]{10}$/.test(value) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    {
      message: "Must be a valid email or 10-digit phone number",
    }
  );

const formSchema = z.object({
  contact: loginContact,
  password: z.string().min(8, "Password must be atleast 8 characters"),
});

type FormObjectType = z.infer<typeof formSchema>;

export default function Login() {
  const [show, setShow] = useState<boolean>(false);
  const form = useForm<FormObjectType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contact: "",
      password: "",
    },
  });

  const showPasswordHandler = (): void => {
    setShow((prev) => !prev);
  };
  return (
    <div className="flex items-center justify-center gap-20 h-[90vh] mx-5 lg:mx-15">
      <div className="pointer-events-none hidden lg:block">
        <Image
          src="/auth.png"
          alt="login-page-illustration.png"
          height={300}
          width={600}
          className="w-[100%] h-[600px] object-cover"
          priority={true}
        />
      </div>
      <div className="flex flex-col gap-3 border lg:border-none p-5 rounded w-[600px]">
        <h1 className="text-[36px] font-medium whitespace-nowrap select-none">
          Log in to E-Commerce
        </h1>
        <p className="text-[16px] font-regular select-none">
          Enter your credentials below
        </p>
        <div className="mt-12">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) => console.log(data))}
              className="flex flex-col gap-10"
            >
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Email or Phone number"
                        className="!text-[18px] border-0 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none border-b-2 border-gray-200 rounded-none pb-3
                        "
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage className="ml-3 mt-[-10px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={show ? "text" : "password"}
                          placeholder="Password"
                          className="!text-[18px] border-0 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none border-b-2 border-gray-200 rounded-none pb-3"
                          {...field}
                        />
                        <div
                          className="absolute right-1 top-1 cursor-pointer text-gray-500"
                          onClick={showPasswordHandler}
                        >
                          {show ? <Eye /> : <EyeClosed />}
                        </div>
                      </div>
                    </FormControl>
                    <FormDescription />
                    <FormMessage className="ml-3 mt-[-10px]" />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-2 mt-7.5">
                <Link
                  href=""
                  className="text-[#DB4444] font-medium text-end select-none"
                >
                  Forgot password ?
                </Link>
                <Button
                  type="submit"
                  className="w-full p-6 cursor-pointer bg-[#DB4444] select-none"
                >
                  Login
                </Button>
                <p className=" text-center select-none">
                  Don't have an account?{" "}
                  <Link href="/auth/signup" className="font-medium underline">
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
