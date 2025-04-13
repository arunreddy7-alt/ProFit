"use client";
import React from "react";

function TestimonialCard({ text, image }) {
  return (
    <article className="flex-[shrink] w-[326px]">
      <blockquote className="p-5 mb-4 text-sm bg-blue-50 rounded-xl">
        {text}
      </blockquote>
      <img
        src={image}
        alt="Client testimonial"
        className="w-[85px] h-[85px] rounded-full mx-auto"
      />
    </article>
  );
}

export default TestimonialCard;
