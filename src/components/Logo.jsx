import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div>
      <img
        src={"/assets/logo.png"}
        alt="logo image"
        className="md:mt-18 w-16 h-16 md:w-[150px] md:h-[120px] bg-white rounded-4xl"
      />
    </div>
  );
}
