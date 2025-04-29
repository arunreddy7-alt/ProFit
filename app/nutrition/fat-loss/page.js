"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FatLoss() {
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
      name: "Green Protein Smoothie Bowl",
      description: "A nutrient-packed breakfast bowl that keeps you full while supporting fat loss with high protein and fiber content.",
      calories: 350,
      protein: "25g",
      carbs: "45g",
      fats: "10g",
      link: "https://youtube.com/shorts/4S93_04kF4I?si=lSsHq_HKqumS1Fta",
      image: "https://images.unsplash.com/photo-1543363136-3fdb62e11be5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R3JlZW4lMjBQcm90ZWluJTIwU21vb3RoaWUlMjBCb3dsfGVufDB8fDB8fHww",
      ingredients: [
        "1 cup spinach",
        "1 scoop plant-based protein",
        "1/2 banana",
        "1/4 cup mixed berries",
        "1 tbsp chia seeds",
        "1 cup almond milk",
        "1 tsp honey"
      ],
      instructions: [
        "Blend spinach, protein powder, and almond milk",
        "Pour into bowl",
        "Top with sliced banana and berries",
        "Sprinkle chia seeds",
        "Drizzle with honey"
      ]
    },
    {
      id: 2,
      name: "Grilled Chicken Salad",
      description: "A protein-rich salad with healthy fats and fiber to keep you satisfied while maintaining a calorie deficit.",
      calories: 400,
      protein: "35g",
      carbs: "20g",
      fats: "15g",
      link: "https://youtube.com/shorts/afrzbpdK_wY?si=VwtlLB-MrKLTITTX",
      image: "https://images.unsplash.com/photo-1716034353309-c6066ae24c67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEdyaWxsZWQlMjBDaGlja2VuJTIwU2FsYWR8ZW58MHx8MHx8fDA%3D",
      ingredients: [
        "4 oz grilled chicken breast",
        "2 cups mixed greens",
        "1/4 avocado",
        "1/4 cup cherry tomatoes",
        "1/4 cup cucumber",
        "1 tbsp olive oil",
        "1 tbsp balsamic vinegar"
      ],
      instructions: [
        "Grill chicken breast until cooked through",
        "Chop vegetables and mix with greens",
        "Slice avocado",
        "Combine all ingredients",
        "Drizzle with olive oil and vinegar"
      ]
    },
    {
      id: 3,
      name: "Baked Salmon with Vegetables",
      description: "A heart-healthy meal rich in omega-3s and fiber, perfect for supporting fat loss while maintaining muscle mass.",
      calories: 450,
      protein: "30g",
      carbs: "25g",
      fats: "20g",
      link: "https://youtube.com/shorts/hkg20ddlC-g?si=EV1ldwSQhVMGZvYf",
      image: "https://images.unsplash.com/photo-1592926294185-2a4b1dd2a70d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJha2VkJTIwU2FsbW9uJTIwd2l0aCUyMFZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D",
      ingredients: [
        "5 oz salmon fillet",
        "1 cup roasted vegetables",
        "1 tsp olive oil",
        "1/2 lemon",
        "Fresh herbs",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Preheat oven to 375°F",
        "Season salmon with herbs and lemon",
        "Roast vegetables with olive oil",
        "Bake salmon for 15-20 minutes",
        "Serve with roasted vegetables"
      ]
    },
    {
      id: 4,
      name: "Turkey and Vegetable Stir-Fry",
      description: "A low-calorie, high-protein meal that's quick to prepare and perfect for fat loss.",
      calories: 380,
      protein: "40g",
      carbs: "30g",
      fats: "12g",
      link: "https://youtu.be/M6HylvgyV34?si=d84cnVZSO8DZpWA7",
      image: "https://images.unsplash.com/photo-1670398564097-0762e1b30b3a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VHVya2V5JTIwYW5kJTIwVmVnZXRhYmxlJTIwU3RpciUyMEZyeXxlbnwwfHwwfHx8MA%3D%3D",
      ingredients: [
        "4 oz ground turkey",
        "1 cup mixed vegetables",
        "1 tsp olive oil",
        "1 clove garlic",
        "1 tbsp low-sodium soy sauce",
        "1/2 cup brown rice"
      ],
      instructions: [
        "Cook brown rice according to package",
        "Sauté garlic in olive oil",
        "Add ground turkey and cook through",
        "Add vegetables and soy sauce",
        "Serve over brown rice"
      ]
    },
    {
      id: 5,
      name: "Greek Yogurt Parfait",
      description: "A protein-rich snack that satisfies sweet cravings while supporting fat loss goals.",
      calories: 250,
      protein: "20g",
      carbs: "25g",
      fats: "8g",
      link: "https://youtube.com/shorts/BDq_-y1JSgo?si=KqD97ia_8IWxk9zt",
      image: "https://images.unsplash.com/photo-1600730493985-d1efe3d85ff3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3JlZWslMjBZb2d1cnQlMjBQYXJmYWl0fGVufDB8fDB8fHww",
      ingredients: [
        "1 cup non-fat Greek yogurt",
        "1/4 cup mixed berries",
        "1 tbsp granola",
        "1 tsp honey",
        "1 tsp cinnamon"
      ],
      instructions: [
        "Layer yogurt in a bowl",
        "Add berries",
        "Sprinkle granola",
        "Drizzle with honey",
        "Dust with cinnamon"
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
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80"
          alt="Fat Loss Nutrition"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-5xl font-bold mb-4">Fat Loss Nutrition</h1>
          <p className="text-xl max-w-2xl">A balanced nutrition plan designed to support fat loss while maintaining muscle mass through optimal protein intake and controlled calories.</p>
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
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Caloric Deficit</h3>
                <p className="text-black">300-500 calories</p>
                <p className="text-sm text-gray-600 mt-2">(Below maintenance)</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Protein Intake</h3>
                <p className="text-black">1.6-2.2g per kg</p>
                <p className="text-sm text-gray-600 mt-2">(of body weight)</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Meal Frequency</h3>
                <p className="text-black">4-5 meals per day</p>
                <p className="text-sm text-gray-600 mt-2">(Every 3-4 hours)</p>
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
          <h2 className="text-3xl font-bold mb-6 text-black">Fat Loss Tips</h2>
          <div className="bg-sky-50 p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-6 space-y-3 text-black">
              <li>Focus on whole, unprocessed foods</li>
              <li>Stay hydrated throughout the day</li>
              <li>Include protein in every meal</li>
              <li>Choose high-fiber foods to stay full</li>
              <li>Plan and prepare meals in advance</li>
              <li>Track your food intake consistently</li>
              <li>Get adequate sleep for optimal metabolism</li>
              <li>Practice mindful eating habits</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <section className="bg-sky-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Fat Loss Journey?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Track your meals, set nutrition goals, and stay on track with our meal planning tools.</p>
          <Link href="/register" className="bg-white text-sky-900 hover:bg-sky-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            Create Your Account
          </Link>
        </div>
      </section>
    </div>
  );
}