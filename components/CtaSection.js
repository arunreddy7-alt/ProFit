"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function CtaSection() {
  return (
    <section className="relative w-full h-[438px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1623874514711-0f321325f318"
          alt="Gym background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,60,130,0.00)_0%,rgba(0,60,130,0.80)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center px-5 mx-auto max-w-none h-full max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <h2 className="text-3xl font-bold mb-4">
          Let&apos;s Transform Your Fitness Journey
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join thousands who&apos;ve already changed their lives with our personalized fitness tracking. 
          It&apos;s time to achieve the results you&apos;ve always wanted.
        </p>
        <Link
          href="/contact"
          className="px-10 py-4 text-xl text-white rounded-3xl border border-white hover:bg-white hover:text-sky-900 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Contact us for personalized fitness plan"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default CtaSection;
