import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function MarqueePage() {
  const items = [
    { text: "Product Quality", img: "/assets/logo.png" },
    { text: "India Quelldkfjk", img: "/assets/logo.png" },
    { text: "Fast Delivery", img: "/assets/logo.png" },
    { text: "Best Service", img: "/assets/logo.png" },
    { text: "Product Quality", img: "/assets/logo.png" },
    { text: "India Quelldkfjk", img: "/assets/logo.png" },
    { text: "Fast Delivery", img: "/assets/logo.png" },
    { text: "Best Service", img: "/assets/logo.png" },
  ];

  return (
    <Marquee
      direction="left"
      speed={50}
      pauseOnHover={true}
      gradient={false}
      className="py-4 bg-red-300 rotate-3"
    >
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2 px-6 flex-shrink-0">
          <Image
            src={item.img}
            width={24}
            height={24}
            alt="image"
            className="object-contain"
          />
          <h1 className="text-lg font-semibold">{item.text}</h1>
        </div>
      ))}
    </Marquee>
  );
}
