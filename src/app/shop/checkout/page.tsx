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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
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
    <div className="flex items-center justify-center gap-15 p-5 pb-[150px]">
      <div className="w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => console.log(data))}
            className="flex flex-col md:flex-row items-start justify-center md:gap-20 w-full"
          >
            <div className="flex flex-col gap-7.5 w-full md:w-[40%]">
              <h1 className="text-2xl font-medium my-5">Billing Details</h1>
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
                        className="!text-[16px] border-gray-200 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none rounded-none py-5 bg-gray-50 placeholder:text-gray-300"
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
                        placeholder="Tell me where you want to deliver"
                        className="!text-[16px] border-gray-200 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none rounded-none py-5 bg-gray-50 placeholder:text-gray-300"
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
                        placeholder="Your building got some name right ?"
                        className="!text-[16px] border-gray-200 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none rounded-none py-5 bg-gray-50 placeholder:text-gray-300"
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
                        placeholder="Tell me the city"
                        className="!text-[16px] border-gray-200 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none rounded-none py-5 bg-gray-50 placeholder:text-gray-300"
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
                        className="!text-[16px] border-gray-200 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none rounded-none py-5 bg-gray-50 placeholder:text-gray-300"
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
                        className="!text-[16px] border-gray-200 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none rounded-none py-5 bg-gray-50 placeholder:text-gray-300"
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
            <div className="w-full md:w-[40%] mt-[120px]">
              <div className="flex flex-col gap-3">
                {[1, 2].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="w-[70px] h-[40px] bg-gray-200 rounded"></div>
                    <p className="font-medium text-[16px]">$650</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 mt-10">
                <div className="flex items-center justify-between border-b-2 pb-2.5">
                  <p>Subtotal:</p>
                  <p className="font-medium text-[16px]">$650</p>
                </div>
                <div className="flex items-center justify-between border-b-2 pb-2.5">
                  <p>Shipping:</p>
                  <p className="font-medium text-[16px]">Free</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Total:</p>
                  <p className="font-medium text-[16px]">$1750</p>
                </div>
              </div>
              <div className="flex flex-col gap-5 mt-10">
                <RadioGroup defaultValue="bank" className="flex flex-col gap-7">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <RadioGroupItem
                        value="bank"
                        id="r1"
                        className="w-[20px] h-[20px]"
                      />
                      <Label htmlFor="r1" className="cursor-pointer">
                        Bank
                      </Label>
                    </div>
                    <div className="flex items-center gap-3">
                      {[
                        "/visa-svgrepo-com.svg",
                        "/paypal-svgrepo-com.svg",
                        "/mastercard-svgrepo-com (1).svg",
                        "/amex-svgrepo-com.svg",
                      ].map((bank, index) => (
                        <Image
                          src={bank}
                          alt="bank-options"
                          key={index}
                          height={40}
                          width={40}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <RadioGroupItem
                      value="cod"
                      id="r2"
                      className="w-[20px] h-[20px]"
                    />
                    <Label htmlFor="r2" className="cursor-pointer">
                      Cash on delivery
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex items-center gap-5 mt-10">
                <Input
                  type="text"
                  placeholder="Coupon Code"
                  className="w-[65%] py-5 rounded"
                />
                <Button disabled className="w-[35%] py-5 bg-[#DB4444] rounded">
                  Apply Coupon
                </Button>
              </div>
              <Button
                type="submit"
                className="w-full py-6 bg-[#DB4444] hover:bg-[#c44949] rounded mt-18 text-[16px] cursor-pointer"
              >
                Checkout
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
