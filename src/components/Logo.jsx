import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div>
      <img
        src={"/assets/logo.png"}
        alt="logo image"
        className="md:mt-12 w-16 h-16 md:w-[120px] md:h-[100px] bg-white rounded-4xl"
      />
    </div>
  );
}
