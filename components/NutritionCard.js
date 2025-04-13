"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function NutritionCard({ image, title, description, isLarge = false }) {
  // Ensure title is a string and handle null/undefined cases
  const safeTitle = String(title || "");
  const slug = safeTitle ? safeTitle.toLowerCase().replace(/\s+/g, "-") : "";
  
  return (
    <article className="relative overflow-hidden">
      <div className={`relative ${isLarge ? "h-[764px]" : "h-[367px]"} w-full`}>
        <Image
          src={image}
          alt={`${safeTitle} nutrition plan`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={isLarge}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-10 left-10 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-3xl mb-2">{safeTitle}</h3>
          <p className="text-sm">{description || ""}</p>
          <Link
            href={`/nutrition/${slug}`}
            className="inline-block px-10 py-4 mt-5 text-xl rounded-3xl border border-white hover:bg-white hover:text-sky-900 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={`View ${safeTitle} nutrition plan`}
          >
            Go
          </Link>
        </div>
      </div>
    </article>
  );
}

export default NutritionCard;
