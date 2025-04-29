"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MuscleBuilding() {
  const [activeExercise, setActiveExercise] = useState(null);

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

  // Exercise data with descriptions, images, and animation details
  const exercises = [
    {
      id: 1,
      name: "Barbell Bench Press",
      description: "The king of chest exercises. Lie on a flat bench, grip the barbell slightly wider than shoulder-width, lower it to your chest, then press it back up.",
      sets: 4,
      reps: "8-12",
      link: "https://www.youtube.com/watch?v=rT7DgCr-3pg",
      image: "https://images.unsplash.com/photo-1652363722833-509b3aac287b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVuY2glMjBwcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
      muscles: ["Chest", "Shoulders", "Triceps"],
      animation: [
        { position: "Lie flat on bench with feet firmly planted" },
        { position: "Grip bar slightly wider than shoulder-width" },
        { position: "Unrack bar and hold it above chest" },
        { position: "Lower bar to mid-chest with control" },
        { position: "Press bar back up to starting position" }
      ]
    },
    {
      id: 2,
      name: "Barbell Back Squat",
      description: "The ultimate lower body builder. Place the barbell on your upper back, squat down until thighs are parallel to the ground, then drive back up.",
      sets: 4,
      reps: "8-12",
      link: "https://www.youtube.com/watch?v=SW_C1A-rejs",
      image: "https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVuY2glMjBwcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
      muscles: ["Quadriceps", "Hamstrings", "Glutes", "Core"],
      animation: [
        { position: "Place bar on upper back, grip slightly wider than shoulders" },
        { position: "Stand with feet shoulder-width apart" },
        { position: "Brace core and keep chest up" },
        { position: "Squat down until thighs are parallel to ground" },
        { position: "Drive through heels to return to standing" }
      ]
    },
    {
      id: 3,
      name: "Barbell Deadlift",
      description: "The king of all exercises. Hinge at the hips, grip the bar, and lift it by extending your hips and knees. Keep your back straight throughout.",
      sets: 4,
      reps: "6-8",
      link: "https://www.youtube.com/watch?v=1xVfF6jQpY0",
      image: "https://images.unsplash.com/photo-1534368270820-9de3d8053204?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlbmNoJTIwcHJlc3N8ZW58MHx8MHx8fDA%3D",
      muscles: ["Hamstrings", "Glutes", "Back", "Core"],
      animation: [
        { position: "Stand with feet hip-width apart, bar over mid-foot" },
        { position: "Bend down and grip bar just outside legs" },
        { position: "Keep back straight and chest up" },
        { position: "Lift bar by extending hips and knees" },
        { position: "Lower bar with control back to ground" }
      ]
    },
    {
      id: 4,
      name: "Overhead Press",
      description: "A powerful shoulder builder. Press the barbell from shoulder height to overhead while keeping your core tight and back straight.",
      sets: 4,
      reps: "8-12",
      link: "https://www.youtube.com/watch?v=2yjwXTZQDDI",
      image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      muscles: ["Shoulders", "Triceps", "Upper Chest"],
      animation: [
        { position: "Stand with feet shoulder-width apart" },
        { position: "Grip bar slightly wider than shoulders" },
        { position: "Press bar overhead until arms are straight" },
        { position: "Lower bar back to shoulders with control" },
        { position: "Keep core tight throughout movement" }
      ]
    },
    {
      id: 5,
      name: "Barbell Row",
      description: "A fundamental back builder. Hinge at the hips, grip the bar, and pull it towards your waist while keeping your back straight.",
      sets: 4,
      reps: "8-12",
      link: "https://www.youtube.com/watch?v=FWJR5Ve8bnQ",
      image: "https://images.unsplash.com/photo-1723403955484-cec996d64abb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxiYXJiZWxsJTIwcm93aW5nJTIwZ3ltfGVufDB8fDB8fHww",
      muscles: ["Back", "Biceps", "Rear Deltoids"],
      animation: [
        { position: "Hinge at hips with slight knee bend" },
        { position: "Grip bar slightly wider than shoulders" },
        { position: "Pull bar towards waist" },
        { position: "Squeeze shoulder blades together" },
        { position: "Lower bar with control" }
      ]
    },
    {
      id: 6,
      name: "Pull-ups",
      description: "A challenging bodyweight exercise for building a strong back. Hang from a bar and pull your body up until your chin clears the bar.",
      sets: 4,
      reps: "6-10",
      link: "https://www.youtube.com/watch?v=eGo4IYlbE5g",
      image: "https://images.unsplash.com/photo-1669989179344-3e84780dab7d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVsbCUyMHVwc3xlbnwwfHwwfHx8MA%3D%3D",
      muscles: ["Back", "Biceps", "Forearms"],
      animation: [
        { position: "Grip bar slightly wider than shoulders" },
        { position: "Hang with arms fully extended" },
        { position: "Pull body up until chin clears bar" },
        { position: "Lower body with control" },
        { position: "Keep core tight throughout" }
      ]
    }
  ];

  // Function to toggle exercise animation display
  const toggleExercise = (id) => {
    if (activeExercise === id) {
      setActiveExercise(null);
    } else {
      setActiveExercise(id);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2NsZSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
          alt="Muscle Building Workout"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-5xl font-bold mb-4">Muscle Building Workout</h1>
          <p className="text-xl max-w-2xl">A comprehensive strength training program designed to maximize muscle growth through progressive overload and compound movements.</p>
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

      {/* Workout Overview */}
      <motion.section 
        className="container mx-auto px-4 py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-black">Workout Overview</h2>
          <div className="bg-sky-50 p-6 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Frequency</h3>
                <p className="text-black">4-5 days per week</p>
                <p className="text-sm text-gray-600 mt-2">(Split routine)</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Duration</h3>
                <p className="text-black">60-90 minutes</p>
                <p className="text-sm text-gray-600 mt-2">(Including warm-up)</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Equipment</h3>
                <p className="text-black">Barbell & Weights</p>
                <p className="text-sm text-gray-600 mt-2">(Gym required)</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-black">Warm-Up (10-15 minutes)</h2>
          <div className="bg-sky-50 p-6 rounded-lg shadow-md mb-8">
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>5-10 minutes of light cardio (treadmill or bike)</li>
              <li>Dynamic stretching (leg swings, arm circles)</li>
              <li>Light sets of first exercise (50% of working weight)</li>
              <li>Core activation exercises</li>
              <li>Shoulder mobility drills</li>
            </ul>
          </div>
        </motion.div>

        {/* Exercise List */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-black">Exercises</h2>
          <p className="mb-6 text-gray-700">Click on each exercise to see detailed animation steps.</p>
          
          <div className="space-y-8">
            {exercises.map((exercise) => (
              <motion.div 
                key={exercise.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }} 
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-[300px]">
                    <Image
                      src={exercise.image}
                      alt={exercise.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h3 className="text-2xl font-bold text-sky-900 mb-2">{exercise.name}</h3>
                    <p className="text-gray-700 mb-4">{exercise.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-sky-800">Sets</h4>
                        <p>{exercise.sets}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sky-800">Reps</h4>
                        <p>{exercise.reps}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-sky-800 mb-1">Target Muscles</h4>
                      <div className="flex flex-wrap gap-2">
                        {exercise.muscles.map((muscle, index) => (
                          <span key={index} className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm">
                            {muscle}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <button
                        onClick={() => toggleExercise(exercise.id)}
                        className="mt-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        {activeExercise === exercise.id ? "Hide Animation" : "Show Animation"}
                      </button>
                      <a
                        href={exercise.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                        Watch Tutorial
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Animation Steps */}
                {activeExercise === exercise.id && (
                  <motion.div 
                    className="bg-sky-50 p-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-xl font-semibold text-sky-900 mb-4">Animation Steps</h4>
                    <div className="space-y-4">
                      {exercise.animation.map((step, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-center gap-4"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.2 }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <p>{step.position}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cool Down Section */}
        <motion.div variants={itemVariants} className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-black">Cool Down (10-15 minutes)</h2>
          <div className="bg-sky-50 p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4 text-black">Hold each stretch for 30-45 seconds:</p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>Hamstring stretch</li>
              <li>Quadriceps stretch</li>
              <li>Shoulder stretch</li>
              <li>Chest stretch</li>
              <li>Back stretch</li>
              <li>Deep breathing exercises (5-10 slow breaths)</li>
            </ul>
          </div>
        </motion.div>

        {/* Tips Section */}
        <motion.div variants={itemVariants} className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-black">Tips for Success</h2>
          <div className="bg-sky-50 p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-6 space-y-3 text-black">
              <li>Focus on progressive overload - gradually increase weight or reps</li>
              <li>Maintain proper form throughout all exercises</li>
              <li>Rest 2-3 minutes between sets for optimal recovery</li>
              <li>Consume adequate protein (1.6-2.2g per kg of body weight)</li>
              <li>Get 7-9 hours of quality sleep each night</li>
              <li>Stay hydrated throughout your workout</li>
              <li>Consider working with a spotter for heavy lifts</li>
              <li>Keep a training log to track progress</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <section className="bg-sky-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Muscle?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Track your progress, set goals, and stay motivated with our fitness tracking tools.</p>
          <Link href="/register" className="bg-white text-sky-900 hover:bg-sky-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            Create Your Account
          </Link>
        </div>
      </section>
    </div>
  );
}