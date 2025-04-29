"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BeginnerFullBody() {
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
      name: "Squats",
      description: "A compound exercise that targets your quadriceps, hamstrings, and glutes. Stand with feet shoulder-width apart, lower your body as if sitting in a chair, then return to standing position.",
      sets: 3,
      reps: "12-15",
      link: "youtube.com",
      image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80",
      muscles: ["Quadriceps", "Hamstrings", "Glutes", "Core"],
      animation: [
        { position: "Stand with feet shoulder-width apart, toes slightly turned out" },
        { position: "Brace your core and keep chest up" },
        { position: "Lower your body by bending knees and pushing hips back" },
        { position: "Lower until thighs are parallel to ground (or as low as comfortable)" },
        { position: "Push through heels to return to starting position" }
      ]
    },
    {
      id: 2,
      name: "Push-ups",
      description: "An upper body exercise that works your chest, shoulders, and triceps. Start in a plank position with hands slightly wider than shoulders, lower your body until chest nearly touches the floor, then push back up.",
      sets: 3,
      reps: "8-12",
      image: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      muscles: ["Chest", "Shoulders", "Triceps", "Core"],
      animation: [
        { position: "Start in high plank position with hands slightly wider than shoulders" },
        { position: "Keep body in straight line from head to heels" },
        { position: "Lower your body by bending elbows at 45° angle from body" },
        { position: "Lower until chest nearly touches floor" },
        { position: "Push through palms to return to starting position" }
      ]
    },
    {
      id: 3,
      name: "T-Barbell Rows",
      description: "A back exercise that targets your lats and rhomboids. Bend at the waist with one hand on a bench, pull a dumbbell up toward your hip with the other hand, then lower it back down.",
      sets: 3,
      reps: "10-12 each side",
      image: "https://images.unsplash.com/photo-1659350776600-704fbc39036a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      muscles: ["Lats", "Rhomboids", "Biceps", "Rear Deltoids"],
      animation: [
        { position: "Place one hand and knee on bench, opposite foot on floor" },
        { position: "Hold dumbbell in free hand with arm extended" },
        { position: "Keep back flat and core engaged" },
        { position: "Pull dumbbell up toward hip, keeping elbow close to body" },
        { position: "Lower dumbbell back to starting position with control" }
      ]
    },
    {
      id: 4,
      name: "Lunges",
      description: "A lower body exercise that works your quadriceps, hamstrings, and glutes. Step forward with one leg, lower your body until both knees are bent at 90 degrees, then push back to the starting position.",
      sets: 3,
      reps: "10-12 each leg",
      image: "https://images.unsplash.com/photo-1652363723009-3f2f4d85428e?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      muscles: ["Quadriceps", "Hamstrings", "Glutes", "Core"],
      animation: [
        { position: "Stand with feet hip-width apart" },
        { position: "Step forward with one leg" },
        { position: "Lower body until both knees form 90° angles" },
        { position: "Front knee should be above ankle, back knee hovering above floor" },
        { position: "Push through front heel to return to starting position" }
      ]
    },
    {
      id: 5,
      name: "Plank",
      description: "A core exercise that engages your entire midsection. Hold a push-up position with your weight on your forearms, keeping your body in a straight line from head to heels.",
      sets: 3,
      reps: "30-60 seconds",
      image: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?q=80",
      muscles: ["Core", "Shoulders", "Back", "Glutes"],
      animation: [
        { position: "Start in forearm plank position, elbows under shoulders" },
        { position: "Keep body in straight line from head to heels" },
        { position: "Engage core by drawing navel toward spine" },
        { position: "Keep shoulders down away from ears" },
        { position: "Hold position while breathing normally" }
      ]
    },
    {
      id: 6,
      name: "Dumbbell Shoulder Press",
      description: "An upper body exercise that targets your shoulders and triceps. Sit or stand with dumbbells at shoulder height, press them overhead, then lower them back down.",
      sets: 3,
      reps: "10-12",
      image: "https://images.unsplash.com/photo-1715136155096-152c39758a43?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      muscles: ["Shoulders", "Triceps", "Upper Back"],
      animation: [
        { position: "Stand with feet shoulder-width apart or sit with back supported" },
        { position: "Hold dumbbells at shoulder height with palms facing forward" },
        { position: "Engage core and keep chest up" },
        { position: "Press dumbbells overhead until arms are fully extended" },
        { position: "Lower dumbbells back to shoulder height with control" }
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
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80"
          alt="Beginner Full Body Workout"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-5xl font-bold mb-4">Beginner Full Body Workout</h1>
          <p className="text-xl max-w-2xl">A comprehensive 3-day split workout plan designed for beginners to build strength and endurance across all major muscle groups.</p>
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
                <p className="text-black">3 days per week</p>
                <p className="text-sm text-gray-600 mt-2">(Mon/Wed/Fri or Tue/Thu/Sat)</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Duration</h3>
                <p className="text-black">45-60 minutes</p>
                <p className="text-sm text-gray-600 mt-2">(Including warm-up and cool-down)</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-sky-900 mb-2">Equipment</h3>
                <p className="text-black">Minimal</p>
                <p className="text-sm text-gray-600 mt-2">(Dumbbells and bench recommended)</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-black">Warm-Up (5-10 minutes)</h2>
          <div className="bg-sky-50 p-6 rounded-lg shadow-md mb-8">
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>5 minutes of light cardio (jogging in place, jumping jacks, or jump rope)</li>
              <li>10 arm circles forward and backward</li>
              <li>10 bodyweight squats</li>
              <li>10 walking lunges (5 each leg)</li>
              <li>10 push-ups (modified if needed)</li>
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
                    
                    <button
                      onClick={() => toggleExercise(exercise.id)}
                      className="mt-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      {activeExercise === exercise.id ? "Hide Animation" : "Show Animation"}
                    </button>
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
          <div className="bg-sky-50 p-6 rounded-lg shadow-md mb-8" >
            <p className="mb-4 text-black">Hold each stretch for 20-30 seconds:</p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>Quadriceps stretch (hold heel to buttocks)</li>
              <li>Hamstring stretch (reach for toes)</li>
              <li>Chest stretch (arms extended behind back)</li>
              <li>Shoulder stretch (arm across chest)</li>
              <li>Deep breathing exercises (5 slow breaths)</li>
            </ul>
          </div>
        </motion.div>

        {/* Tips Section */}
        <motion.div variants={itemVariants} className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-black">Tips for Success</h2>
          <div className="bg-sky-50 p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-6 space-y-3     text-black">
              <li>Start with lighter weights and focus on proper form</li>
              <li>Rest 60-90 seconds between sets</li>
              <li>Stay hydrated throughout your workout</li>
              <li>If you're new to exercise, consider working with a personal trainer for your first few sessions</li>
              <li>Listen to your body and modify exercises as needed</li>
              <li>Aim to progressively increase weight or reps as you get stronger</li>
              <li>Allow 48 hours of recovery between full-body workouts</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <section className="bg-sky-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Track your progress, set goals, and stay motivated with our fitness tracking tools.</p>
          <Link href="/register" className="bg-white text-sky-900 hover:bg-sky-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            Create Your Account
          </Link>
        </div>
      </section>
    </div>
  );
}
