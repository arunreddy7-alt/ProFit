"use client";
import React from "react";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <header className="relative w-full bg-black h-[982px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/958a4a3c4b6bc4335b2b0c96a6572f8c8aa2dc39"
        alt="Fitness hero background"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 size-full">
        <Navbar />
        <div className="px-5 mx-auto mt-52 max-w-none max-md:max-w-[991px] max-sm:max-w-screen-sm">
          <h1 className="text-9xl font-bold text-center text-white opacity-40 max-md:text-7xl max-sm:text-5xl">
            No Excuses, just Results
          </h1>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
