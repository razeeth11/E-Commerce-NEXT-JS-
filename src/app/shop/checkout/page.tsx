"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const phoneSchema = z
  .string()
  .trim()
  .refine((value) => /^[0-9]{10}$/.test(value), {
    message: "Must be a valid 10-digit phone number",
  });
const emailSchema = z
  .string()
  .trim()
  .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
    message: "Must be a valid email address",
  });

const checkoutSchema = z.object({
  name: z.string().min(4, "Minimun 4 characters"),
  street: z.string().min(10, "Minimun 10 characters"),
  apartment: z.string().min(10, "Minimun 10 characters"),
  townCity: z.string().min(6, "Minimun 4 characters"),
  phoneNumber: phoneSchema,
  email: emailSchema,
});

type CheckoutDetails = z.infer<typeof checkoutSchema>;

export default function Checkout() {
  const form = useForm<CheckoutDetails>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      street: "",
      apartment: "",
      townCity: "",
      phoneNumber: "",
      email: "",
    },
  });

  return (
    <div className="h-screen flex items-center justify-center gap-15 mx-5 lg:mx-20">
      <div className="w-full">
        <h1 className="text-2xl font-medium my-5">Billing Details</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => console.log(data))}
            className="flex items-start border w-full"
          >
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] text-gray-500">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Mr.Walter white"
                        className="!text-[16px] border-0 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none rounded-none py-5 bg-gray-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] text-gray-500">
                      Street
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Street address"
                        className="!text-[16px] border-0 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none rounded-none py-5 bg-gray-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="apartment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] text-gray-500">
                      Building or Apartment name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Building or apartment name"
                        className="!text-[16px] border-0 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none rounded-none py-5 bg-gray-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="townCity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] text-gray-500">
                      Town / City
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Town / City"
                        className="!text-[16px] border-0 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none rounded-none py-5 bg-gray-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] text-gray-500">
                      Phone number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="+91 4375937495"
                        className="!text-[16px] border-0 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none rounded-none py-5 bg-gray-100"
                        {...field}
                      />
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
                    <FormLabel className="text-[16px] text-gray-500">
                      Email address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="heisenberg@meth.com"
                        className="!text-[16px] border-0 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none rounded-none py-5 bg-gray-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  className="w-[20px] h-[20px] cursor-pointer data-[state=checked]:bg-[#DB4444] data-[state=unchecked]:bg-gray-200 border-none"
                />
                <label
                  htmlFor="terms"
                  className="text-[16px] font-medium cursor-pointer"
                >
                  Save this information for faster check-out next time
                </label>
              </div>
            </div>
            <div></div>
          </form>
        </Form>
      </div>
    </div>
  );
}
