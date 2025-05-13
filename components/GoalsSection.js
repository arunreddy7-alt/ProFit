"use client";
import React from "react";
import Image from "next/image";

function GoalsSection() {
  return (
    <section
      id="about"
      className="px-5 py-20 mx-auto max-w-none max-md:max-w-[991px] max-sm:max-w-screen-sm"
    >
      <div className="flex gap-20 items-center max-md:flex-col">
        <div className="flex-1">
          <h2 className="mb-8 text-5xl font-bold text-black">Crush Your Goals</h2>
          <p className="text-lg text-gray-600 mb-12">
            Whether you&apos;re just starting out or looking to level up,
            we&apos;ll help you set achievable goals and track your progress.
            Our AI-powered system adapts as you grow, ensuring you&apos;re
            always challenged but never overwhelmed.
          </p>
          <p className="mb-8 text-2xl text-black">1000+ Users</p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-xl text-sky-900 rounded-3xl border border-sky-900 hover:bg-sky-900 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-900 focus:ring-offset-2"
            aria-label="Contact us for more information"
          >
            Contact Us
          </a>
        </div>
        <div className="flex-1 relative group overflow-hidden rounded-[41px] transition-transform duration-500 hover:scale-105">
          <div className="relative w-[484px] h-[527px] max-lg:w-full transform transition-transform duration-500 group-hover:rotate-2">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/478a561e83efb3565531a683b11b3df04848b4cd"
              alt="Person working out with fitness equipment"
              fill
              className="rounded-[41px] object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 484px"
            />
            <div className="absolute inset-0 bg-sky-900/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-[41px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoalsSection;
