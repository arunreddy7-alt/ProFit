"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Balanced() {
  const [activeMeal, setActiveMeal] = useState(null);

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Meal data with descriptions, images, and nutritional details
  const meals = [
    {
      id: 1,
      name: "Mediterranean Breakfast Bowl",
      description: "A balanced breakfast combining protein, healthy fats, and complex carbohydrates for sustained energy throughout the morning.",
      calories: 500,
      protein: "20g",
      carbs: "60g",
      fats: "25g",
      link: "https://youtu.be/Nc7KXxZjIf8?si=hGScVr1h5FuqmQds",
      image: "https://images.unsplash.com/photo-1722607571891-7ab5396a1b83?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1lZGl0ZXJyYW5lYW4lMjBCcmVha2Zhc3QlMjBCb3dsfGVufDB8fDB8fHww",
      ingredients: [
        "1/2 cup cooked quinoa",
        "2 boiled eggs",
        "1/4 avocado",
        "1/4 cup cherry tomatoes",
        "1 tbsp olive oil",
        "1 tbsp feta cheese",
        "Fresh herbs",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Cook quinoa according to package instructions",
        "Boil eggs to desired doneness",
        "Slice avocado and tomatoes",
        "Combine all ingredients in a bowl",
        "Drizzle with olive oil",
        "Sprinkle with feta and herbs"
      ]
    },
    {
      id: 2,
      name: "Balanced Buddha Bowl",
      description: "A colorful bowl packed with a variety of nutrients, perfect for a balanced lunch that keeps you satisfied.",
      calories: 550,
      protein: "25g",
      carbs: "65g",
      fats: "20g",
      link: "https://youtu.be/3Gziwog3nYc?si=3CokHb3oAzX1wyBd",
      image: "https://images.unsplash.com/photo-1588710409495-fc23eb8d3c47?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFsYW5jZWQlMjBCdWRkaGElMjBCb3dsJTIwbWVhbHxlbnwwfHwwfHx8MA%3D%3D",
      ingredients: [
        "1/2 cup cooked brown rice",
        "1/2 cup roasted sweet potatoes",
        "1/2 cup chickpeas",
        "1 cup mixed greens",
        "1/4 avocado",
        "1 tbsp tahini dressing",
        "1 tbsp pumpkin seeds",
        "Fresh lemon juice"
      ],
      instructions: [
        "Cook brown rice according to package",
        "Roast sweet potatoes with olive oil",
        "Rinse and drain chickpeas",
        "Arrange all ingredients in a bowl",
        "Drizzle with tahini dressing",
        "Squeeze fresh lemon juice"
      ]
    },
    {
      id: 3,
      name: "Grilled Salmon with Quinoa",
      description: "A perfectly balanced dinner with lean protein, whole grains, and vegetables for optimal nutrition.",
      calories: 600,
      protein: "35g",
      carbs: "45g",
      fats: "30g",
      link: "https://youtu.be/87PCwN84p7k?si=coSBjTT-swr-Ynud",
      image: "https://images.unsplash.com/photo-1711172376124-412ac87d2f7c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fEdyaWxsZWQlMjBTYWxtb24lMjB3aXRoJTIwUXVpbm9hfGVufDB8fDB8fHww",
      ingredients: [
        "6 oz salmon fillet",
        "1/2 cup cooked quinoa",
        "1 cup steamed vegetables",
        "1 tbsp olive oil",
        "1 lemon",
        "Fresh dill",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Season salmon with herbs and lemon",
        "Grill salmon until cooked through",
        "Cook quinoa according to package",
        "Steam vegetables until tender",
        "Plate and serve with lemon wedges"
      ]
    },
    {
      id: 4,
      name: "Balanced Snack Plate",
      description: "A nutritious snack combining protein, healthy fats, and fiber to keep you energized between meals.",
      calories: 300,
      protein: "15g",
      carbs: "30g",
      fats: "15g",
      link: "https://youtube.com/shorts/Xq0GOqnMwcg?si=rJulLy6-0pbwN878",
      image: "https://images.unsplash.com/photo-1715733502316-cbf63da2cd72?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFsYW5jZWQlMjBTbmFjayUyMFBsYXRlfGVufDB8fDB8fHww",
      ingredients: [
        "1/4 cup hummus",
        "1/2 cup carrot sticks",
        "1/2 cup cucumber slices",
        "1/4 cup mixed nuts",
        "1/4 cup grapes",
        "2 whole grain crackers"
      ],
      instructions: [
        "Prepare vegetables by washing and cutting",
        "Arrange all ingredients on a plate",
        "Serve with hummus as dip",
        "Enjoy as a balanced snack"
      ]
    },
    {
      id: 5,
      name: "Balanced Smoothie",
      description: "A nutrient-dense smoothie that combines protein, healthy fats, and fiber for a balanced meal or snack.",
      calories: 400,
      protein: "20g",
      carbs: "50g",
      fats: "15g",
      link: "https://youtube.com/shorts/Xq4QZWr-Om4?si=KYGJnnLSV9XnjJoD",
      image: "https://images.unsplash.com/photo-1647919234561-b4d3ab6b27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmFsYW5jZWQlMjBTbW9vdGhpZXxlbnwwfHwwfHx8MA%3D%3D",
      ingredients: [
        "1 cup almond milk",
        "1 scoop protein powder",
        "1/2 banana",
        "1/4 cup mixed berries",
        "1 tbsp almond butter",
        "1 tbsp chia seeds",
        "1 cup spinach",
        "Ice cubes"
      ],
      instructions: [
        "Add all ingredients to blender",
        "Blend until smooth",
        "Add ice cubes for desired consistency",
        "Pour into glass and enjoy"
      ]
    }
  ];

  // Function to toggle meal details display
  const toggleMeal = (id) => {
    if (activeMeal === id) {
      setActiveMeal(null);
    } else {
      setActiveMeal(id);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Balanced Nutrition"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-5xl font-bold mb-4">Balanced Nutrition</h1>
          <p className="text-xl max-w-2xl">A comprehensive nutrition plan designed to provide optimal balance of macronutrients and micronutrients for overall health and wellness.</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-sky-900 text-white py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-white hover:text-sky-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Nutrition Overview */}
      <motion.section 
        className="container mx-auto px-4 py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-black">Nutrition Overview</h2>
          <div className="bg-sky-50 p-6 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Macronutrient Balance</h3>
                <p className="text-black">40/30/30</p>
                <p className="text-sm text-gray-600 mt-2">(Carbs/Protein/Fats)</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Meal Frequency</h3>
                <p className="text-black">3 meals + 2 snacks</p>
                <p className="text-sm text-gray-600 mt-2">(Every 3-4 hours)</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Caloric Intake</h3>
                <p className="text-black">Maintenance</p>
                <p className="text-sm text-gray-600 mt-2">(Based on activity level)</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-black">Meal Plan</h2>
          <p className="mb-6 text-gray-700">Click on each meal to see detailed ingredients and instructions.</p>
          
          <div className="space-y-8">
            {meals.map((meal) => (
              <motion.div 
                key={meal.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }} 
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-[300px]">
                    <Image
                      src={meal.image}
                      alt={meal.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h3 className="text-2xl font-bold text-sky-900 mb-2">{meal.name}</h3>
                    <p className="text-gray-700 mb-4">{meal.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-sky-800">Calories</h4>
                        <p>{meal.calories}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sky-800">Protein</h4>
                        <p>{meal.protein}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sky-800">Carbs</h4>
                        <p>{meal.carbs}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <button
                        onClick={() => toggleMeal(meal.id)}
                        className="mt-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        {activeMeal === meal.id ? "Hide Details" : "Show Details"}
                      </button>
                      <a
                        href={meal.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                        Watch Recipe
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Meal Details */}
                {activeMeal === meal.id && (
                  <motion.div 
                    className="bg-sky-50 p-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-semibold text-sky-900 mb-4">Ingredients</h4>
                        <ul className="space-y-2">
                          {meal.ingredients.map((ingredient, index) => (
                            <motion.li 
                              key={index}
                              className="flex items-center gap-2"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                              {ingredient}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-sky-900 mb-4">Instructions</h4>
                        <ol className="space-y-2">
                          {meal.instructions.map((instruction, index) => (
                            <motion.li 
                              key={index}
                              className="flex items-start gap-2"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <span className="flex-shrink-0 w-6 h-6 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">
                                {index + 1}
                              </span>
                              {instruction}
                            </motion.li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tips Section */}
        <motion.div variants={itemVariants} className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-black">Balanced Eating Tips</h2>
          <div className="bg-sky-50 p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-6 space-y-3 text-black">
              <li>Include a variety of food groups in each meal</li>
              <li>Focus on whole, minimally processed foods</li>
              <li>Stay hydrated throughout the day</li>
              <li>Practice mindful eating habits</li>
              <li>Plan meals ahead of time</li>
              <li>Listen to your body's hunger cues</li>
              <li>Include protein, fiber, and healthy fats in each meal</li>
              <li>Enjoy treats in moderation</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <section className="bg-sky-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Balanced Nutrition Journey?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Track your meals, set nutrition goals, and stay on track with our meal planning tools.</p>
          <Link href="/register" className="bg-white text-sky-900 hover:bg-sky-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            Create Your Account
          </Link>
        </div>
      </section>
    </div>
  );
}