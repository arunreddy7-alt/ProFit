"use client";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  const authLink = isAuthenticated ? "/profile" : "/register";
  const authText = isAuthenticated ? "Profile" : "Register";

  return (
    <nav className="px-5 mx-auto max-w-none max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <div className="flex justify-between items-center py-10">
        <Link
          href="/"
          className="text-2xl font-bold text-white"
          aria-label="ProFit Home"
        >
          ProFit
        </Link>

        <div className="flex gap-9 items-center text-sm text-white max-md:hidden">
          <a
            href="#about"
            className="hover:underline focus:underline focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            About
          </a>
          <a
            href="#workouts"
            className="hover:underline focus:underline focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('workouts').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            Workouts
          </a>
          <a
            href="#meals"
            className="hover:underline focus:underline focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('meals').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            Meals
          </a>
          <a
            href="#coach"
            className="hover:underline focus:underline focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('coach').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            AI Coach
          </a>
          <Link
            href={authLink}
            className="hover:underline focus:underline focus:outline-none"
          >
            {authText}
          </Link>
        </div>

        <button
          className="hidden text-white max-md:block focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <i className="ti ti-menu-2" aria-hidden="true" />
        </button>

        {isMenuOpen && (
          <div className="absolute top-20 right-5 bg-black p-5 rounded-lg z-50 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-white">
              <a
                href="#about"
                className="hover:underline focus:underline focus:outline-none"
              >
                About
              </a>
              <a
                href="#workouts"
                className="hover:underline focus:underline focus:outline-none"
              >
                Workouts
              </a>
              <a
                href="#meals"
                className="hover:underline focus:underline focus:outline-none"
              >
                Meals
              </a>
              <a
                href="#coach"
                className="hover:underline focus:underline focus:outline-none"
              >
                AI Coach
              </a>
              <Link
                href={authLink}
                className="hover:underline focus:underline focus:outline-none"
              >
                {authText}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
