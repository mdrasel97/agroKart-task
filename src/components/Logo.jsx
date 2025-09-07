import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div>
      <img
        src={"/assets/logo.png"}
        // width={0}
        // height={0}
        alt="logo image"
        className="md:mt-20 w-16 h-16 md:w-[180px] md:h-[160px] bg-white rounded-4xl"
      />
    </div>
  );
}
