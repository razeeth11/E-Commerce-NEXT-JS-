"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Calculator,
  Calendar,
  CreditCard,
  Search,
  Settings,
  Smile,
  User,
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
import { useState } from "react";
import { Input } from "@/components/ui/input";

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
      name: "Contact",
      url: "/marketing/contact",
    },
    {
      name: "About",
      url: "/marketing/about",
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
      <div className="flex items-center gap-2.5">
        <Image
          src={"/Logo.png"}
          alt="CBR-Logo.png"
          width={65}
          height={65}
          className="pointer-events-none"
        />
        <p className="text-xl font-medium">CBR E-Commerce</p>
      </div>
      <div className="flex items-center gap-10 font-medium hover:underline">
        {navLinks.map((link, index) => (
          <Link href={link.url} key={index}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="relative w-60 cursor-pointer" onClick={openCommand}>
        <Search className="absolute right-3 top-1/4 h-4 w-4 text-gray-500" />
        <Input
          type="text"
          placeholder="Search here..."
          aria-label="Search through site content"
        />
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
