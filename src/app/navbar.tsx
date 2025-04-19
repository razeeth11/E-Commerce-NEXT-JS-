"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AlignLeft,
  Calculator,
  Calendar,
  CreditCard,
  Heart,
  MenuIcon,
  Search,
  Settings,
  ShoppingBag,
  Smile,
  User,
  UserRound,
} from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type Url = {
  name: string;
  url: string;
};

type CommandStateType = {
  open: boolean;
  setOpen: (value: boolean) => void;
};
export default function NavBar() {
  const [open, setOpen] = useState<boolean>(false);

  const navLinks: Url[] = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/marketing/about",
    },
    {
      name: "Contact",
      url: "/marketing/contact",
    },
    {
      name: "Login",
      url: "/auth/login",
    },
  ];

  const openCommand = (): void => {
    setOpen(true);
  };

  return (
    <div className="flex items-center justify-between px-5 border-b p-1 bg-white">
      <Link href="/">
        <div className="flex items-center gap-1">
          <Image
            src={"/Logo.png"}
            alt="CBR-Logo.png"
            width={65}
            height={65}
            className="pointer-events-none"
          />
          <p className="text-2xl font-bold">CBR</p>
        </div>
      </Link>
      <div className="hidden xl:flex items-center gap-10 font-medium hover:underline">
        {navLinks.map((link, index) => (
          <Link href={link.url} key={index}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <div
          className="hidden md:block relative w-60 cursor-pointer"
          onClick={openCommand}
        >
          <Search className="absolute right-3 top-1/4 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="What are you looking for?"
            aria-label="Search through site content"
            className="pb-1.5"
          />
        </div>
        <Button
          className="bg-white hover:bg-white border md:hidden"
          onClick={openCommand}
        >
          <Search className="text-black" />
        </Button>
        <div className="hidden md:flex items-center gap-4 cursor-pointer">
          <Link href={"/shop/wishlist"}>
            <Heart />
          </Link>
          <Link href={"/shop/cart"}>
            <ShoppingBag />
          </Link>
          <Link href={"/user/abdul-razeeth"}>
            <UserRound />
          </Link>
        </div>
        <div className="xl:hidden">
          <SideMenuBar />
        </div>
      </div>
      <CommandDemo open={open} setOpen={setOpen} />
    </div>
  );
}

const CommandDemo: React.FC<CommandStateType> = ({ open, setOpen }) => {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Search Something . . ." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem disabled>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
};

export function SideMenuBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignLeft />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border">
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
