"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, PhoneCall } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const emailValidate = z
  .string()
  .trim()
  .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
    message: "Must be a valid email address",
  });
const phoneValidate = z
  .string()
  .trim()
  .refine((value) => /^[0-9]{10}$/.test(value), {
    message: "Must be a valid phone number",
  });

const contactFormSchema = z.object({
  name: z.string().min(5, "Need a bigger name"),
  email: emailValidate,
  phone: phoneValidate,
  message: z.string().min(10, "Write a little more!"),
});

type ContactForm = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  return (
    <div className="min-h-[60vh] my-20">
      <div className="flex flex-col lg:flex-row justify-between gap-10 m-5 lg:m-20 border border-amber-50">
        <Card className="lg:w-[30%] px-5">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="border p-2 rounded-full bg-[#db4444] text-white">
                <PhoneCall className="p-0.5" />
              </div>
              <p className="text-[18px] text-[#DB4444]">Call to Us</p>
            </CardTitle>
            <CardDescription className="flex flex-col gap-2.5 font-medium mt-2.5">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </CardDescription>
          </CardHeader>
          <Separator />
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="border p-2 rounded-full bg-[#db4444] text-white">
                <Mail className="p-0.5" />
              </div>
              <p className="text-[18px] text-[#DB4444]">Write to Us</p>
            </CardTitle>
            <CardDescription className="flex flex-col gap-2.5 font-medium mt-2.5">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: customer@exclusive.com</p>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="lg:w-[70%] px-5">
          <Form {...form}>
            <form
              className="flex flex-col gap-5"
              onSubmit={form.handleSubmit((data) => console.log(data))}
            >
              <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-10">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Name"
                            className="!text-[18px] border-0 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none bg-[#F5F5F5] rounded py-6
                        "
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="ml-3 mt-[-10px]" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Email"
                            className="!text-[18px] border-0 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none bg-[#F5F5F5] rounded py-6
                        "
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="ml-3 mt-[-10px]" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Phone number"
                            className="!text-[18px] border-0 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none bg-[#F5F5F5] rounded py-6
                        "
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="ml-3 mt-[-10px]" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Message"
                          rows={6}
                          className="!text-[18px] border-0 outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none focus:bg-none bg-[#F5F5F5] rounded h-[150px]
                          "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="ml-3 mt-[-10px]" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="text-right">
                <Button className="p-6 rounded bg-[#DB4444] cursor-pointer">
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
}
