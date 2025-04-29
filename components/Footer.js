"use client";
import React from "react";

function Footer() {
  return (
    <footer className="py-24 text-white bg-sky-900">
      <div className="px-5 mx-auto max-w-none max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3 max-md:col-span-6 max-sm:col-span-12">
            <div className="p-10 rounded-3xl border border-white">
              <h2 className="mb-8 text-2xl font-bold">SmartFlex</h2>
              <p className="mb-9 text-sm">
                We create unforgettable fitness journeys that will transform
                your health and strength for life.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  aria-label="Visit our Facebook page"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 32 32" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7208)"/>
                    <path 
                      d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" 
                      fill="white"
                    />
                    <defs>
                      <linearGradient 
                        id="paint0_linear_87_7208" 
                        x1="16" 
                        y1="2" 
                        x2="16" 
                        y2="29.917" 
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#18ACFE"/>
                        <stop offset="1" stopColor="#0163E0"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  aria-label="Visit our Twitter page"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 48 48" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="24" cy="24" r="20" fill="#1DA1F2"/>
                    <path 
                      fillRule="evenodd" 
                      clipRule="evenodd" 
                      d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z" 
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  aria-label="Visit our Instagram page"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20" cy="20" r="20" fill="#C13584"/>
                    <g
                      fill="none" 
                      stroke="white" 
                      strokeWidth="2"
                    >
                      <rect width="20" height="20" x="10" y="10" rx="6"/>
                      <circle cx="20" cy="20" r="5"/>
                      <circle cx="26" cy="14" r="1"/>
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/aarunreddy/"
                  aria-label="Visit our LinkedIn page"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20" cy="20" r="20" fill="#0A66C2"/>
                    <g fill="white">
                      <path d="M12 16h3.5v12H12V16z"/>
                      <circle cx="13.75" cy="13" r="1.75"/>
                      <path d="M25.5 16c-1.75 0-2.875.875-3.5 1.75V16H18.5v12H22v-6c0-1.5 1-2.5 2.25-2.5s2.25 1 2.25 2.5v6H30v-7c0-3.5-2-5-4.5-5z"/>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-4 max-md:col-span-6 max-sm:col-span-12">
            <div className="p-10 rounded-3xl border border-white">
              <h2 className="mb-8 text-2xl font-bold">Train with us</h2>
              <p className="mb-9 text-sm">
                Subscribe to be the first to know about new workouts and fitness
                tips!
              </p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-4 text-sky-900 bg-white rounded-3xl"
                  aria-label="Email address"
                  required
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 text-white bg-sky-900 rounded-3xl border border-white hover:bg-white hover:text-sky-900 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="col-span-2 max-md:col-span-6 max-sm:col-span-12">
            <div className="p-10 rounded-3xl border border-white">
              <h2 className="mb-8 text-2xl font-bold">About</h2>
              <nav className="flex flex-col gap-6 text-sm">
                <a
                  href="/about"
                  className="hover:underline focus:underline focus:outline-none"
                >
                  About Us
                </a>
                <a
                  href="/workouts"
                  className="hover:underline focus:underline focus:outline-none"
                >
                  Workouts
                </a>
                <a
                  href="/news"
                  className="hover:underline focus:underline focus:outline-none"
                >
                  News & Article
                </a>
                <a
                  href="/partners"
                  className="hover:underline focus:underline focus:outline-none"
                >
                  Partners
                </a>
              </nav>
            </div>
          </div>

          <div className="col-span-2 max-md:col-span-6 max-sm:col-span-12">
            <div className="p-10 rounded-3xl border border-white">
              <h2 className="mb-8 text-2xl font-bold">Support</h2>
              <nav className="flex flex-col gap-6 text-sm">
                <a
                  href="/contact"
                  className="hover:underline focus:underline focus:outline-none"
                >
                  Contact
                </a>
                <a
                  href="/faq"
                  className="hover:underline focus:underline focus:outline-none"
                >
                  FAQ
                </a>
                <a
                  href="/privacy"
                  className="hover:underline focus:underline focus:outline-none"
                >
                  Privacy Policy
                </a>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-16 text-sm text-center">
          Copyright ©2025. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
