import { Input } from "@/components/ui/input";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

type Url = {
  name: string;
  url: string;
};
const footLinks: Url[] = [
  {
    name: "My Account",
    url: "/user/abdul-razeeth",
  },
  {
    name: "Login/Signup",
    url: "/auth/login",
  },
  {
    name: "Cart",
    url: "/shop/cart",
  },
  {
    name: "Wishlist",
    url: "/shop/wishlist",
  },
];

const Footer = () => {
  return (
    <div className="flex items-start justify-around gap-10 flex-wrap bg-black text-white p-20">
      <div className="flex flex-col gap-4 w-[150px] lg:w-[200px]">
        <h1 className="text-[28px] font-medium underline">Exclusive</h1>
        <h4 className="font-medium text-[20px]">Subscribe</h4>
        <div className="flex flex-col gap-2.5">
          <p className="text-[18px] font-normal">
            Get 10% off your first order
          </p>
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded py-5"
            />
            <ChevronRight className="absolute right-1 text-white top-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[150px] lg:w-[200px]">
        <h4 className="font-medium text-[20px] underline">Support</h4>
        <p className="text-[18px] font-normal">
          111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
        </p>
        <p className="text-[18px] font-normal">exclusive@gmail.com</p>
        <p className="text-[18px] font-normal">+98373456556</p>
      </div>
      <div className="flex flex-col gap-4 w-[150px] lg:w-[200px]">
        <h4 className="font-medium text-[20px] underline">Account</h4>
        <div className="flex flex-col gap-2.5 font-medium hover:underline">
          {footLinks.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className="text-[18px] font-normal"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[150px] lg:w-[200px]">
        <h4 className="font-medium text-[20px] underline">Download App</h4>
        <div className="flex flex-col gap-2.5 font-medium hover:underline">
          {["Privacy policy", "Terms of use", "FAQ", "Contact"].map(
            (link, index) => (
              <Link href={""} key={index} className="text-[18px] font-normal">
                {link}
              </Link>
            )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[150px] lg:w-[200px]">
        <h4 className="font-medium text-[20px] underline">Download App</h4>
        <p className="text-gray-400">Save $3 with App New User Only</p>
        <div className="flex items-center gap-5 cursor-pointer">
          <Instagram />
          <Twitter />
          <Facebook />
          <Linkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
