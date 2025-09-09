"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div>
      <Card
        key={product.id}
        className="hover:shadow-xl transition transform hover:-translate-y-2 rounded-2xl pt-0 pb-2 overflow-hidden"
      >
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        <CardContent className="p-4 space-y-3">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <MapPin className="w-4 h-4 text-blue-800" />
            {product.location}
          </p>
          <Button className="w-full bg-blue-800 hover:bg-blue-900">
            Visit Shop
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
