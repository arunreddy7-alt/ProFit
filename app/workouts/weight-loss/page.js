"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WeightLoss() {
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
      name: "High-Intensity Interval Training (HIIT)",
      description: "A powerful fat-burning workout that alternates between intense bursts of activity and fixed periods of less-intense activity or rest.",
      sets: 4,
      reps: "30s work, 30s rest",
      link: "https://www.youtube.com/watch?v=ml6cT4AZdqI",
      image: "https://images.unsplash.com/photo-1734668489582-52ad40df8fc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhpaXQlMjBneW18ZW58MHx8MHx8fDA%3D",
      muscles: ["Full Body", "Cardiovascular"],
      animation: [
        { position: "Warm up for 5 minutes with light cardio" },
        { position: "Perform exercise at maximum intensity for 30 seconds" },
        { position: "Rest or perform light activity for 30 seconds" },
        { position: "Repeat for 4-6 rounds" },
        { position: "Cool down with light cardio and stretching" }
      ]
    },
    {
      id: 2,
      name: "Jump Rope",
      description: "An excellent cardiovascular exercise that burns calories and improves coordination. Can be done anywhere with minimal equipment.",
      sets: 4,
      reps: "1-2 minutes",
      link: "https://www.youtube.com/watch?v=1BZM2Vre5oc",
      image: "https://images.unsplash.com/photo-1514994667787-b48ca37155f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVtcCUyMHJvcGV8ZW58MHx8MHx8fDA%3D",
      muscles: ["Calves", "Shoulders", "Core", "Cardiovascular"],
      animation: [
        { position: "Hold rope handles with arms at sides" },
        { position: "Jump just high enough to clear rope" },
        { position: "Land softly on balls of feet" },
        { position: "Keep elbows close to body" },
        { position: "Maintain steady rhythm" }
      ]
    },
    {
      id: 3,
      name: "Burpees",
      description: "A full-body exercise that combines strength training and aerobic elements. Great for burning calories and building endurance.",
      sets: 4,
      reps: "10-15",
      link: "https://www.youtube.com/watch?v=auBLPXO8Fww",
      image: "https://images.unsplash.com/photo-1739283180407-21e27d5c0735?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      muscles: ["Full Body", "Cardiovascular"],
      animation: [
        { position: "Start in standing position" },
        { position: "Drop into squat position" },
        { position: "Kick feet back into plank position" },
        { position: "Do a push-up" },
        { position: "Jump feet back to squat position" },
        { position: "Jump up with arms overhead" }
      ]
    },
    {
      id: 4,
      name: "Mountain Climbers",
      description: "A dynamic exercise that targets the core while providing cardiovascular benefits. Great for burning calories and improving endurance.",
      sets: 4,
      reps: "30-45 seconds",
      link: "https://www.youtube.com/watch?v=nmwgirgXLYM",
      image: "https://images.unsplash.com/photo-1628257491475-7c586ef2799c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU0fHxhYnMlMjB3b3Jrb3V0fGVufDB8fDB8fHww",
      muscles: ["Core", "Shoulders", "Hip Flexors", "Cardiovascular"],
      animation: [
        { position: "Start in high plank position" },
        { position: "Bring right knee towards chest" },
        { position: "Quickly switch legs" },
        { position: "Keep core tight and back flat" },
        { position: "Maintain steady breathing" }
      ]
    },
    {
      id: 5,
      name: "Box Jumps",
      description: "A plyometric exercise that builds explosive power while burning calories. Great for improving cardiovascular fitness and lower body strength.",
      sets: 4,
      reps: "10-12",
      link: "https://www.youtube.com/watch?v=52JbYwQYUVY",
      image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJveCUyMGp1bXBzJTIwZ3ltfGVufDB8fDB8fHww",
      muscles: ["Quadriceps", "Glutes", "Calves", "Core"],
      animation: [
        { position: "Stand facing box with feet shoulder-width apart" },
        { position: "Swing arms back and bend knees" },
        { position: "Explosively jump onto box" },
        { position: "Land softly with knees slightly bent" },
        { position: "Step down carefully" }
      ]
    },
    {
      id: 6,
      name: "Battle Ropes",
      description: "A full-body exercise that improves cardiovascular fitness while building strength and endurance. Great for burning calories and improving coordination.",
      sets: 4,
      reps: "30-45 seconds",
      link: "https://www.youtube.com/watch?v=cD6YrWxw5k4",
      image: "https://images.unsplash.com/photo-1588528402605-1f9d0eb7a6d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxhYnMlMjB3b3Jrb3V0fGVufDB8fDB8fHww",
      muscles: ["Shoulders", "Arms", "Core", "Cardiovascular"],
      animation: [
        { position: "Stand with feet shoulder-width apart" },
        { position: "Hold ropes with arms extended" },
        { position: "Create alternating waves with arms" },
        { position: "Keep core tight and knees slightly bent" },
        { position: "Maintain steady rhythm" }
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
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80"
          alt="Weight Loss Workout"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-5xl font-bold mb-4">Weight Loss Workout</h1>
          <p className="text-xl max-w-2xl">A high-intensity workout program designed to maximize calorie burn and boost metabolism through cardiovascular and strength exercises.</p>
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
                <p className="text-black">5-6 days per week</p>
                <p className="text-sm text-gray-600 mt-2">(Alternate cardio and strength)</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Duration</h3>
                <p className="text-black">30-45 minutes</p>
                <p className="text-sm text-gray-600 mt-2">(Including warm-up)</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Equipment</h3>
                <p className="text-black">Minimal</p>
                <p className="text-sm text-gray-600 mt-2">(Jump rope, battle ropes optional)</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-black">Warm-Up (5-10 minutes)</h2>
          <div className="bg-sky-50 p-6 rounded-lg shadow-md mb-8">
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>5 minutes of light cardio (jogging in place, jumping jacks)</li>
              <li>Dynamic stretching (leg swings, arm circles)</li>
              <li>Bodyweight squats (10 reps)</li>
              <li>Push-ups (5-10 reps)</li>
              <li>High knees (30 seconds)</li>
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
                        <h4 className="font-semibold text-sky-800">Reps/Time</h4>
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
          <h2 className="text-3xl font-bold mb-6 text-black">Cool Down (5-10 minutes)</h2>
          <div className="bg-sky-50 p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4 text-black">Hold each stretch for 20-30 seconds:</p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>Hamstring stretch</li>
              <li>Quadriceps stretch</li>
              <li>Shoulder stretch</li>
              <li>Chest stretch</li>
              <li>Deep breathing exercises (5 slow breaths)</li>
            </ul>
          </div>
        </motion.div>

        {/* Tips Section */}
        <motion.div variants={itemVariants} className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-black">Tips for Success</h2>
          <div className="bg-sky-50 p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-6 space-y-3 text-black">
              <li>Stay hydrated throughout your workout</li>
              <li>Maintain proper form to prevent injuries</li>
              <li>Gradually increase intensity as you get fitter</li>
              <li>Combine with a balanced diet for best results</li>
              <li>Get adequate rest between workouts</li>
              <li>Track your progress and celebrate small victories</li>
              <li>Listen to your body and modify exercises as needed</li>
              <li>Stay consistent with your workout schedule</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <section className="bg-sky-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Weight Loss Journey?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Track your progress, set goals, and stay motivated with our fitness tracking tools.</p>
          <Link href="/register" className="bg-white text-sky-900 hover:bg-sky-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            Create Your Account
          </Link>
        </div>
      </section>
    </div>
  );
}