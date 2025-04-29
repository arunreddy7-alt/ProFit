"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MuscleGain() {
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
      name: "High-Protein Breakfast Bowl",
      description: "A nutrient-dense breakfast packed with protein and complex carbs to fuel your morning workout and muscle growth.",
      calories: 650,
      protein: "45g",
      carbs: "75g",
      fats: "20g",
      link: "https://youtube.com/shorts/0cqi5Eh73TA?si=yBJS9x8hKss69gWI",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80",
      ingredients: [
        "3 large eggs",
        "1 cup cooked quinoa",
        "1/2 avocado",
        "1/2 cup black beans",
        "1/4 cup feta cheese",
        "1 tbsp olive oil",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Cook quinoa according to package instructions",
        "Scramble eggs in olive oil",
        "Combine all ingredients in a bowl",
        "Top with avocado and feta cheese",
        "Season with salt and pepper"
      ]
    },
    {
      id: 2,
      name: "Post-Workout Protein Shake",
      description: "A quick and effective post-workout shake to maximize muscle protein synthesis and recovery.",
      calories: 450,
      protein: "40g",
      carbs: "50g",
      fats: "12g",
      link: "https://youtube.com/shorts/Sxsv0R4wt6k?si=pbXZNR3ZfbYKKDr3",
      image: "https://images.unsplash.com/photo-1622818426197-d54f85b88690?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvdGVpbiUyMHNoYWtlfGVufDB8fDB8fHww",
      ingredients: [
        "1 scoop whey protein",
        "1 banana",
        "1 cup almond milk",
        "1 tbsp peanut butter",
        "1/2 cup oats",
        "1 tsp honey",
        "Ice cubes"
      ],
      instructions: [
        "Add all ingredients to blender",
        "Blend until smooth",
        "Add ice cubes for desired consistency",
        "Serve immediately"
      ]
    },
    {
      id: 3,
      name: "Grilled Chicken with Sweet Potato",
      description: "A balanced meal with lean protein and complex carbohydrates, perfect for muscle recovery and growth.",
      calories: 750,
      protein: "55g",
      carbs: "85g",
      fats: "25g",
      link: "https://youtube.com/shorts/eZuWq-YMmAE?si=M-8nfGK39i3il1sh",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JpbGxlZCUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D",
      ingredients: [
        "8 oz chicken breast",
        "1 large sweet potato",
        "1 cup steamed broccoli",
        "1 tbsp olive oil",
        "1 tsp garlic powder",
        "1 tsp paprika",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Season chicken with spices",
        "Grill chicken until internal temperature reaches 165°F",
        "Bake sweet potato at 400°F for 45 minutes",
        "Steam broccoli until tender",
        "Plate and serve"
      ]
    },
    {
      id: 4,
      name: "Salmon with Quinoa and Vegetables",
      description: "A nutrient-rich meal packed with omega-3s, complete protein, and essential vitamins for muscle growth.",
      calories: 700,
      protein: "50g",
      carbs: "65g",
      fats: "30g",
      link: "https://youtu.be/nzMKG8zB_fs?si=OudKpDEkBtrTkPQX",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FsbW9ufGVufDB8fDB8fHww",
      ingredients: [
        "6 oz salmon fillet",
        "1 cup cooked quinoa",
        "1 cup mixed vegetables",
        "1 tbsp olive oil",
        "1 lemon",
        "Fresh herbs",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Season salmon with herbs and lemon",
        "Bake salmon at 375°F for 15-20 minutes",
        "Cook quinoa according to package instructions",
        "Sauté vegetables in olive oil",
        "Plate and serve"
      ]
    },
    {
      id: 5,
      name: "Greek Yogurt with Berries and Nuts",
      description: "A protein-rich snack perfect for muscle recovery and growth, packed with antioxidants and healthy fats.",
      calories: 400,
      protein: "25g",
      carbs: "35g",
      fats: "20g",
      link: "https://youtube.com/shorts/mVZ0ahdK-MA?si=qs8RaoAUsmM9LbPX",
      image: "https://images.unsplash.com/photo-1668962857273-6cab55849320?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JlZWslMjBZb2d1cnQlMjB3aXRoJTIwQmVycmllcyUyMGFuZCUyME51dHN8ZW58MHx8MHx8fDA%3D",
      ingredients: [
        "1 cup Greek yogurt",
        "1/2 cup mixed berries",
        "1/4 cup mixed nuts",
        "1 tbsp honey",
        "1 tsp cinnamon"
      ],
      instructions: [
        "Spoon yogurt into bowl",
        "Top with berries and nuts",
        "Drizzle with honey",
        "Sprinkle with cinnamon",
        "Serve immediately"
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
          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9uJTIwd2l0aCUyMHF1aW5vYXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Muscle Gain Nutrition"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-5xl font-bold mb-4">Muscle Gain Nutrition</h1>
          <p className="text-xl max-w-2xl">A comprehensive nutrition plan designed to support muscle growth through optimal protein intake and balanced macronutrients.</p>
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
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Protein Intake</h3>
                <p className="text-black">1.6-2.2g per kg</p>
                <p className="text-sm text-gray-600 mt-2">(of body weight)</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Meal Frequency</h3>
                <p className="text-black">5-6 meals per day</p>
                <p className="text-sm text-gray-600 mt-2">(Every 2-3 hours)</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Caloric Surplus</h3>
                <p className="text-black">300-500 calories</p>
                <p className="text-sm text-gray-600 mt-2">(Above maintenance)</p>
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
          <h2 className="text-3xl font-bold mb-6 text-black">Nutrition Tips</h2>
          <div className="bg-sky-50 p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-6 space-y-3 text-black">
              <li>Consume protein within 30 minutes after workouts</li>
              <li>Stay hydrated throughout the day</li>
              <li>Include healthy fats in your diet</li>
              <li>Eat complex carbohydrates for sustained energy</li>
              <li>Plan and prepare meals in advance</li>
              <li>Track your macronutrient intake</li>
              <li>Get adequate sleep for optimal recovery</li>
              <li>Consider supplements if needed (protein powder, creatine)</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <section className="bg-sky-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Nutrition?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Track your meals, set nutrition goals, and stay on track with our meal planning tools.</p>
          <Link href="/register" className="bg-white text-sky-900 hover:bg-sky-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            Create Your Account
          </Link>
        </div>
      </section>
    </div>
  );
}