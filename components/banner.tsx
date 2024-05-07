"use client";

import Image from "next/image";
import Logo from "@/public/mongodb.png";

export default function Banner() {
  return (
    <div className="banner-section h-screen flex items-center">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-0">
        <div className="text-section flex-1 md:w-[100%] px-3">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Title Here</h2>
          <p className="text-lg lg:text-xl">
            Detail text goes here. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Detail text goes here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Detail text goes here. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="image-section flex-1 text-center md:w-[100%] px-3">
          <div className="relative w-full h-full max-w-[400px] mx-auto">
            <div className="img-ring ring1"></div>
            <div className="img-ring ring2"></div>
            <div className="img-ring ring3"></div>
            <Image
              className="object-contain rounded-full  bg-[#001E2B]"
              src={Logo}
              alt="Placeholder Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
