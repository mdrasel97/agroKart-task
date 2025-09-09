"use client";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      {/* Spinner */}
      <Loader2 className="w-12 h-12 animate-spin text-blue-600" />

      {/* Loading Text */}
      <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
        Loading, please wait...
      </p>
    </div>
  );
}
