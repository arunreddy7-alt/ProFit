"use client";
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import GoalsSection from "./GoalsSection";
import WorkoutsSection from "./WorkoutsSection";
import NutritionSection from "./NutritionSection";
import VirtualCoachSection from "./VirtualCoachSection";
import TestimonialsSection from "./TestimonialsSection";
import CtaSection from "./CtaSection";
import Footer from "./Footer";

function FitnessTracker() {
  return (
    <div className="w-full bg-white min-h-screen">
      <HeroSection />
      <main>
        <Navbar />
        <GoalsSection />
        <WorkoutsSection />
        <NutritionSection />
        <VirtualCoachSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default FitnessTracker;
