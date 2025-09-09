import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LandscapeProducts() {
  const [landscapeProducts, setLandscapeProducts] = useState([]);

  useEffect(() => {
    fetch("/api/agri-products")
      .then((res) => res.json())
      .then((data) => {
        setLandscapeProducts(data);
      });
  }, []);
  return (
    <div className="mt-16 ">
      <h2 className="text-3xl font-bold text-center mb-5">
        Landscape Products
      </h2>
      <div className="w-11/12 mx-auto">
        <Carousel
          opts={{
            // align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {landscapeProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-2 w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card className={"py-1"}>
                    <CardContent className="flex flex-col justify-center px-2">
                      <div className="w-full h-40 relative mb-3 p-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover rounded-md p-0"
                        />
                      </div>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-gray-600">${product.price}</p>
                      <p className="text-sm text-gray-500">
                        {product.details.split(" ").slice(0, 7).join(" ")}.
                      </p>
                      <div className="mt-2">
                        <Button>Shop Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
