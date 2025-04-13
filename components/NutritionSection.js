"use client";
import React from "react";
import NutritionCard from "./NutritionCard";

function NutritionSection() {
  const nutritionPlans = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d1f34a9275395c21d3c0e4550f1c124ee75398ec",
      title: "Muscle Gain",
      description: [
        "· Build muscle with high-protein meals",
        "· 2,500–3,000 kcal"
      ],
      isLarge: true,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8a2c485ce06f085a24120ea28e790dcc1bd07406",
      title: "Fat Loss",
      description: [
        "· Lose weight while maintaining muscle\n",
        "· 1,500–2,000 kcal"
      ],
      isLarge: false,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a17edd104371e3e963e53b8a8990dd08dffc6135",
      title: "Balanced",
      description: [
        "· Maintain weight and stay healthy",
        "· 2,000-2,500 kcal"
      ],
      isLarge: false,
    },
  ];

  return (
    <section
      id="meals"
      className="px-5 py-20 mx-auto max-w-none max-md:max-w-[991px] max-sm:max-w-screen-sm"
    >
      <h2 className="mb-20 text-5xl font-bold text-center text-black">Nutrition Guide</h2>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-4 max-md:col-span-12 group hover:scale-105 transition-all duration-300">
          <div className="rounded-2xl overflow-hidden w-[95%] mx-auto">
            <NutritionCard
              image={nutritionPlans[0].image}
              title={nutritionPlans[0].title}
              description={nutritionPlans[0].description}
              isLarge={nutritionPlans[0].isLarge}
            />
          </div>
        </div>
        <div className="col-span-8 max-md:col-span-12">
          <div className="grid grid-rows-2 gap-8 h-full">
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="rounded-2xl overflow-hidden w-[95%] mx-auto">
                <NutritionCard
                  image={nutritionPlans[1].image}
                  title={nutritionPlans[1].title}
                  description={nutritionPlans[1].description}
                  isLarge={nutritionPlans[1].isLarge}
                />
              </div>
            </div>
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="rounded-2xl overflow-hidden w-[95%] mx-auto">
                <NutritionCard
                  image={nutritionPlans[2].image}
                  title={nutritionPlans[2].title}
                  description={nutritionPlans[2].description}
                  isLarge={nutritionPlans[2].isLarge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NutritionSection;
