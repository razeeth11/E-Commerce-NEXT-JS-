"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center text-center h-[70vh]">
      <div className="flex flex-col items-center gap-10 w-[70%]">
        <h1 className="text-3xl lg:text-8xl font-medium">404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Button
          className="max-w-[200px] p-6 cursor-pointer bg-[#DB4444] select-none rounded"
          onClick={(): void => {
            router.push("/");
          }}
        >
          Back to Home Page
        </Button>
      </div>
    </div>
  );
}
