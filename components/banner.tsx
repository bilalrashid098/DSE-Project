"use client";

import Image from "next/image";
import Logo from "@/public/mongodb.png";
import LogoUPB from "@/public/logo.png";

export default function Banner() {
  return (
    <div className="banner-section h-screen flex items-center">
      <div className="relative container mx-auto flex justify-between items-center px-4 lg:px-0 h-full">
        <div className="flex absolute top-[30px] left-0">
          <Image
            className=""
            width={130}
            height={130}
            src={LogoUPB}
            alt="upb"
          />
        </div>
        <div className="text-section flex-1 md:w-[100%] px-3">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            DSE Project Final Phase
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed">
            Our project is a dynamic web application built with Next.js,
            leveraging MongoDB for data storage and retrieval. Through Next.js,
            we've crafted an efficient and responsive platform for accessing and
            searching through a collection of blogs. What sets our
            implementation apart is the integration of MongoDB sharding, managed
            within Docker containers, ensuring scalability and robustness as our
            database grows. With seamless blog retrieval and powerful search
            capabilities, our project offers users a streamlined experience in
            accessing and exploring content.
          </p>
          <div className="text-2xl font-semibold mt-5">Student: Syed Bilal RASHID</div>
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
