"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

type CartProduct = {
  productName: string;
  price: number;
  quantity: number;
  discount: number;
};

const cartItems: CartProduct[] = [
  {
    productName: "LCD Monitor",
    price: 650,
    quantity: 1,
    discount: 0,
  },
  {
    productName: "Mechanical Keyboard",
    price: 120,
    quantity: 2,
    discount: 10, // $10 off
  },
  {
    productName: "Gaming Mouse",
    price: 80,
    quantity: 1,
    discount: 5,
  },
  {
    productName: "USB-C Docking Station",
    price: 200,
    quantity: 1,
    discount: 15,
  },
  {
    productName: "Noise Cancelling Headphones",
    price: 300,
    quantity: 1,
    discount: 20,
  },
];

export default function Cart() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center h-[70vh] p-5 lg:p-25">
      <div>
        <TableDemo />
      </div>
      <div className="flex items-center justify-end gap-10 mt-10">
        <Button
          className="p-6 cursor-pointer bg-transparent text-[#DB4444] font-medium select-none rounded"
          onClick={() => router.back()}
        >
          Continue Shopping
        </Button>
        <Button
          className="p-6 cursor-pointer bg-[#DB4444] select-none rounded"
          onClick={() => router.push("/shop/checkout")}
        >
          <ShoppingCart />
          Checkout
        </Button>
      </div>
    </div>
  );
}

function TableDemo() {
  const totalPrice = (): number => {
    let totalValue: number = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalValue = totalValue + cartItems[i].price;
    }

    return totalValue;
  };

  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="text-[16px] p-7  text-left">Product</TableHead>
          <TableHead className="text-[16px] p-7  text-center">Price</TableHead>
          <TableHead className="text-[16px] p-7  text-center">
            Quantity
          </TableHead>
          <TableHead className="text-[16px] p-7  text-center">
            Discount
          </TableHead>
          <TableHead className="text-[16px] p-7  text-right">
            Subtotal
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cartItems.map((product, index) => (
          <TableRow key={index}>
            <TableCell className="p-5 flex items-center gap-2.5 text-left">
              <div className="w-[60px] h-[40px] bg-amber-700"></div>
              {product.productName}
            </TableCell>
            <TableCell className="p-5 font-medium text-center">
              ${product.price}
            </TableCell>
            <TableCell className="p-5 text-center">
              <div className="flex items-center justify-center gap-1">
                <Button className="w-[20px] h-[20px] rounded bg-[#DB4444] cursor-pointer">
                  <Minus />
                </Button>
                <p className="text-[16px]  px-2 rounded">{product.quantity}</p>
                <Button className="w-[20px] h-[20px] rounded bg-[#DB4444] cursor-pointer">
                  <Plus />
                </Button>
              </div>
            </TableCell>
            <TableCell className="p-5 font-medium text-center">
              <p>{product.discount}%</p>
            </TableCell>
            <TableCell className="p-5 font-medium text-right">
              <p className="text-[16px]">
                $
                {(
                  (product.price - (product.price * product.discount) / 100) *
                  product.quantity
                ).toFixed(2)}
              </p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5} className="text-right py-5 text-[18px]">
            Total ${totalPrice().toFixed(2)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
