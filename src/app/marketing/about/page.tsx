import Image from "next/image";
import { Store, Receipt, Gift, Luggage } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

type Owner = {
  img: string;
  name: string;
  role: string;
};

const aboutList = [
  {
    icon: <Store />,
    count: 23.5,
    text: "Sellers active our site",
  },
  {
    icon: <Receipt />,
    count: 35,
    text: "Monthly product sale",
  },
  {
    icon: <Gift />,
    count: 67.5,
    text: "Customer active in site",
  },
  {
    icon: <Luggage />,
    count: 25,
    text: "Annual sale in our site",
  },
];
const ownerList: Owner[] = [
  {
    img: "/walt.webp",
    name: "Mr. Walter White",
    role: "Chef",
  },
  {
    img: "/gus.webp",
    name: "Gustavo",
    role: "Boss",
  },
  {
    img: "/saul.webp",
    name: "Saul Goodman",
    role: "Lawyer",
  },
];

export default function About() {
  return (
    <div className="flex flex-col gap-25 px-5 lg:px-25 my-10">
      <div className="flex flex-col md:flex-row items-center gap-10 justify-center md:justify-between">
        <div className="w-full flex flex-col gap-5 text-center md:text-left">
          <h1 className="text-[32px] font-medium">Our Story</h1>
          <p className="text-[16px]">
            Launced in 2015, Exclusive is South Asias premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="text-[16px]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/about-hero-image.jpg"
            alt="about-us-shopping-image"
            height={0}
            width={1000}
            className="object-cover w-[100%] md:ml-auto"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-15 flex-wrap">
        {aboutList.map((item, index) => (
          <Card
            key={index}
            className="flex flex-col items-center gap-1.5 border w-[150px] md:w-[200px] p-5 text-center"
          >
            <div className="border-5 border-gray-300 p-2.5 rounded-full bg-black text-white">
              {item.icon}
            </div>
            <h4 className="text-[24px] font-bold">{item.count}K</h4>
            <p className="text-[14px] whitespace-nowrap">{item.text}</p>
          </Card>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-5 lg:gap-30">
        {ownerList.map((owner, index) => (
          <Card
            key={index}
            className="flex flex-col item-start gap-1 w-full lg:w-[350px] p-0 rounded"
          >
            <Image
              src={owner.img}
              alt={owner.name}
              height={0}
              width={1000}
              className="w-full h-[500px] lg:w-[350px] object-cover"
            />
            <div className="m-2.5 flex flex-col gap-1">
              <p className="text-[16px] font-medium">{owner.name}</p>
              <p className="text-[16px] font-medium text-gray-500">
                {owner.role}
              </p>
              <div className="flex items-center gap-1.5 mt-2.5">
                <Facebook className="p-0.5" />
                <Instagram className="p-0.5" />
                <Linkedin className="p-0.5" />
                <Twitter className="p-0.5" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
