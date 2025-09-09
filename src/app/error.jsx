"use client";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  message = "Something went wrong. Please try again!",
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <div className="bg-red-100 dark:bg-red-900 p-6 rounded-full mb-6">
        <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-300" />
      </div>
      <h2 className="text-2xl font-bold mb-2">Oops!</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{message}</p>
      <Link href={"/"}>
        <Button className="bg-primary">Back To Home</Button>
      </Link>
    </div>
  );
}
