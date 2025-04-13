"use client";
import React from "react";

function VirtualCoachSection() {
  return (
    <section
      id="coach"
      className="px-5 py-20 mx-auto max-w-none max-md:max-w-[991px] max-sm:max-w-screen-sm"
    >
      <h2 className="mb-20 text-5xl font-bold text-center text-black">Virtual Coach</h2>
      <div className="flex flex-col gap-12 items-center">
        <div>
          <svg
            width="409"
            height="117"
            viewBox="0 0 409 117"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[409px] h-[117px]"
            aria-labelledby="flexibot-title"
            role="img"
          >
            <title id="flexibot-title text-black">FlexiBot AI Assistant</title>
            <path
              d="M197 16.8281C197 16.8281 197.579 22.2356 199.836 24.4922C202.093 26.7488 207.5 27.3281 207.5 27.3281C207.5 27.3281 202.093 27.9075 199.836 30.1641C197.579 32.4207 197 37.8281 197 37.8281C197 37.8281 196.421 32.4207 194.164 30.1641C191.907 27.9075 186.5 27.3281 186.5 27.3281C186.5 27.3281 191.907 26.7488 194.164 24.4922C196.421 22.2356 197 16.8281 197 16.8281Z"
              fill="#160211"
            ></path>
            <path
              d="M212 7.91406C212 7.91406 212.579 13.3215 214.836 15.5781C217.093 17.8347 222.5 18.4141 222.5 18.4141C222.5 18.4141 217.093 18.9934 214.836 21.25C212.579 23.5066 212 28.9141 212 28.9141C212 28.9141 211.421 23.5066 209.164 21.25C206.907 18.9934 201.5 18.4141 201.5 18.4141C201.5 18.4141 206.907 17.8347 209.164 15.5781C211.421 13.3215 212 7.91406 212 7.91406Z"
              fill="#160211"
            ></path>
            <path
              d="M197 0C197 0 197.579 5.40743 199.836 7.66405C202.093 9.92066 207.5 10.5 207.5 10.5C207.5 10.5 202.093 11.0793 199.836 13.336C197.579 15.5926 197 21 197 21C197 21 196.421 15.5926 194.164 13.336C191.907 11.0793 186.5 10.5 186.5 10.5C186.5 10.5 191.907 9.92066 194.164 7.66405C196.421 5.40743 197 0 197 0Z"
              fill="#160211"
            ></path>
            <text
              fill="#160211"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="DM Sans"
              fontSize="24"
              letterSpacing="0em"
            >
              <tspan x="87.207" y="109.512">
                Ask FlexiBot anything
              </tspan>
            </text>
          </svg>
        </div>
        <a
          href="/ai-coach"
          className="px-10 py-4 text-xl text-white bg-black rounded-3xl hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          aria-label="Start conversation with FlexiBot AI coach"
        >
          Go
        </a>
      </div>
    </section>
  );
}

export default VirtualCoachSection;
