"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function WorkoutCard({ image, splitDays, title }) {
  // Ensure title is a string and handle null/undefined cases
  const safeTitle = String(title || "");
  const slug = safeTitle ? safeTitle.toLowerCase().replace(/\s+/g, "-") : "";
  
  return (
    <article className="group relative overflow-hidden rounded-3xl transition-all duration-300 hover:scale-105">
      <div className="relative h-[700px] w-full">
        {image && (
          <Image
            src={image}
            alt={`${safeTitle} workout program`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-3xl object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
        <div className="absolute bottom-10 left-10 text-white transform transition-all duration-300 group-hover:translate-y-[-10px]">
          <p className="mb-3 text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">{splitDays}</p>
          <h3 className="mb-10 text-3xl transform transition-all duration-300">{safeTitle}</h3>
          <Link
            href={`/workouts/${slug}`}
            className="inline-block px-10 py-4 text-xl rounded-3xl border border-white opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-white hover:text-sky-900"
            aria-label={`View ${safeTitle} workout program`}
          >
            Go
          </Link>
        </div>
      </div>
    </article>
  );
}

export default WorkoutCard;
