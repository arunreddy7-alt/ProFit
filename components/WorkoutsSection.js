"use client";
import React, { useState, useEffect } from 'react';
import WorkoutCard from "./WorkoutCard";

function WorkoutsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const cards = [
    {
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80",
      title: "Beginner Full-Body",
      splitDays: "3-Day Split"
    },
    {
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80",
      title: "Muscle-Building",
      splitDays: "4-Day Split"
    },
    {
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80",
      title: "Weight Loss",
      splitDays: "5-Day Split"
    }
  ];

  

  return (
    <section id="workouts" className="px-5 py-24 mx-auto max-w-[1380px]">
      <div className="flex flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="mb-8 text-5xl font-bold text-black">Workouts</h2>
          <p className="mb-12 text-sm max-w-[400px] text-black">
            Our fitness tracker helps you stay on top of your training with
            structured and customizable workout plans. Whether you're a beginner or
            a pro, you can log your exercises, track progress, and stay motivated
            every step of the way.
          </p>
        </div>
        <div className="flex-1 relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div className="flex-1 flex gap-6">
              <div className="flex-1 hover:rotate-2 transition-transform duration-300 hover:shadow-xl">
                <WorkoutCard
                  image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80"
                  title="Beginner Full-Body"
                  splitDays="3-Day Split"
                />
              </div>
              <div className="flex-1 hover:rotate-2 transition-transform duration-300 hover:shadow-xl">
                <WorkoutCard
                  image="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80"
                  title="Muscle-Building"
                  splitDays="4-Day Split"
                />
              </div>
              <div className="flex-1 hover:rotate-2 transition-transform duration-300 hover:shadow-xl">
                <WorkoutCard
                  image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80"
                  title="Weight Loss"
                  splitDays="5-Day Split"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4 gap-2">
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkoutsSection;
