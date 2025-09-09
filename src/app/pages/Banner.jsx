"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Banner() {
  const banners = [
    {
      id: 1,
      img: "/assets/banner1.jpeg",
      title: "Fresh Products",
      desc: "Get the best quality products at affordable prices.",
      btn: "Shop Now",
    },
    {
      id: 2,
      img: "/assets/banner2.jpeg",
      title: "New Arrivals",
      desc: "Check out our latest collections and offers.",
      btn: "Explore",
    },
    {
      id: 3,
      img: "/assets/banner3.jpeg",
      title: "Special Discounts",
      desc: "Enjoy exclusive deals and discounts today!",
      btn: "Grab Now",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-4 relative">
      <Carousel className="w-full relative">
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-2xl shadow-md overflow-hidden">
                {/* Left: Image */}
                <div className="md:w-1/2 w-full h-64 md:h-96 relative">
                  <Image
                    src={banner.img}
                    alt={banner.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right: Content */}
                <div className="md:w-1/2 w-full p-6 md:p-10 text-center md:text-left space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {banner.title}
                  </h2>
                  <p className="text-gray-600 text-lg">{banner.desc}</p>
                  <Button>{banner.btn}</Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Positioned Arrows */}
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-primary shadow-md rounded-full" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-primary shadow-md rounded-full" />
      </Carousel>
    </div>
  );
}
