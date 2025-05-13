"use client";
import { urlToUrlWithoutFlightMarker } from "next/dist/client/components/router-reducer/fetch-server-response";
import React from "react";
import Image from 'next/image';

function TestimonialsSection() {
  const testimonials = [
    {
      text: "I've tried many fitness apps, but this one stands out. It's simple, effective, and packed with features to help me reach my goals faster!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZl7uhZ2m-N7vOO24agU0AKezV-t-UdQCQ&s",
    },
    {
      text: "This fitness tracker has completely transformed how I work out! I love the AI-powered coaching and meal planning—it keeps me on track every day.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3jMkpP99eJ_q-In7ALhm6nES26Do_SJisA&s",
    },
    {
      text: "This fitness tracker has been a game-changer for me! The interface is smooth, and I love how easy it is to track my workouts and progress. Highly recommend!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVwsGFUK620pibZXSvgk8TqSQG6sOmEnlrvjHcSKwBYk4l7ns6CZNTXn7NPuRdAZPcVI&usqp=CAU",
      },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-black">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-6 overflow-hidden rounded-full">
                <img
                  src={testimonial.image}
                  alt={`Testimonial ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-gray-700">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-12">
        <div className="flex items-center">
          <div className="w-24 h-8 relative">
            <Image
              src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=200&auto=format&fit=crop"
              alt="Trustpilot"
              fill
              className="object-contain"
            />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold">4.8/5</h3>
            <p className="text-gray-600">Based on 1,234 reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
