"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";

const shops = [
  {
    id: 1,
    name: "Dhaka Shop",
    location: "123 Main Street, Dhaka",
    image: "https://images.unsplash.com/photo-1542831371-d531d36971e6",
  },
  {
    id: 2,
    name: "Chittagong Shop",
    location: "456 Central Road, Chittagong",
    image: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8",
  },
  {
    id: 3,
    name: "Khulna Shop",
    location: "789 Market Street, Khulna",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
];

export default function Shops() {
  return (
    <div className="mt-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Our Shops</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shops.map((shop) => (
          <Card
            key={shop.id}
            className="hover:shadow-xl transition transform hover:-translate-y-2 rounded-2xl overflow-hidden"
          >
            <Image
              src={shop.image}
              alt={shop.name}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4 space-y-3">
              <h3 className="text-xl font-semibold">{shop.name}</h3>
              <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPin className="w-4 h-4 text-blue-600" />
                {shop.location}
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Visit Shop
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
