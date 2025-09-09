"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CustomerReviews() {
  const reviews = [
    {
      name: "John Doe",
      position: "CEO, Company",
      text: "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product",
      image: "/assets/customer1.jpeg",
    },
    {
      name: "Jane Smith",
      position: "Marketing Head",
      text: "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product",
      image: "/assets/customer.jpeg",
    },
    {
      name: "Mike Johnson",
      position: "Developer",
      text: "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product",
      image: "/assets/customer3.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent(current === reviews.length - 1 ? 0 : current + 1);
  const prevSlide = () =>
    setCurrent(current === 0 ? reviews.length - 1 : current - 1);

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 mt-16">
      {/* Section Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        Why Customers Love ❤️ Us?
        <div className="w-24 h-1 bg-blue-900 mx-auto mt-3 rounded-full"></div>
      </h2>

      <CardContent className="flex flex-col md:flex-row items-center gap-10">
        {/* Left: Customer Review */}
        <div className="md:w-3/5 w-full bg-white  p-10 rounded-2xl shadow-lg border ">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 leading-relaxed italic">
            "{reviews[current].text}"
          </p>

          {/* content bottom */}
          <div className="flex items-center justify-between">
            {/* Name + Position */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {reviews[current].name}
              </h3>
              <p className="text-sm text-gray-500">
                {reviews[current].position}
              </p>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center space-x-3">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Customer Image */}
        <div className="md:w-2/5 flex justify-center">
          <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-lg ring-4 ring-blue-200">
            <Image
              src={reviews[current].image}
              alt={reviews[current].name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </CardContent>
    </section>
  );
}
