"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Clover } from "lucide-react";

function Hero() {
  return (
    <div
      className="relative heroElem w-full min-h-screen overflow-x-hidden flex justify-center text-center 
          flex-col items-center z-10 "
         style={{ 
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          width: '100vw',
          maxWidth: '100vw'
        }}
    >
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-[url('/static/strawberry.jpg')] bg-cover bg-center bg-no-repeat"
        style={{ filter: "brightness(0.7)" }}
      />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      {/* Animated gradient orbs */}
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center py-20">
        {/* Subtitle */}
        <div
          className="mb-6 animate-fade-in opacity-0"
          style={{ animation: "fadeIn 0.8s ease-out 0.2s forwards" }}
        >
          <span className="inline-block px-4 py-2rounded-full text-red-400 text-sm font-semibold tracking-wide">
            HELLO!
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="max-w-5xl text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-8 animate-fade-in opacity-0"
          style={{ animation: "fadeIn 0.8s ease-out 0.4s forwards" }}
        >
          <span className="block text-beige mb-2">I like</span>
          <span
            className="inline-block animate-gradient text-medium-pink font-playwrite"
            style={{
              backgroundSize: "200% 200%",
              animation:
                "gradient 3s ease infinite, fadeIn 0.8s ease-out 0.6s forwards",
            }}
          >
            Strawberries
          </span>

          {/* Floating HTML icon */}
          <div
            className="inline-block ml-4 animate-float"
            style={{ animation: "float 7s ease-in-out infinite" }}
          >
            <Clover className="w-12 h-12" />
          </div>
        </h1>

        {/* Description */}
        <p
          className="text-medium-pink text-lg md:text-xl max-w-2xl mb-12 leading-relaxed animate-fade-in opacity-0 "
          style={{ animation: "fadeIn 0.8s ease-out 0.8s forwards" }}
        >
          and making websites too hehe
        </p>

        {/* CTA Button */}
        <div
          className="animate-fade-in opacity-0"
          style={{ animation: "fadeIn 0.8s ease-out 1s forwards" }}
        >
          <ScrollLink
            activeClass="active"
            to="interested"
            spy={true}
            offset={-30}
            smooth={true}
            duration={700}
          >
            <button className="group relative px-10 py-5 text-lg font-bold text-beige rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              {/* Button gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-medium-green  to-0 transition-transform duration-300 group-hover:scale-110" />

              {/* Button shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
                  style={{ animation: "shimmer 2s infinite" }}
                />
              </div>

              {/* Button text */}
              <span className="relative flex items-center gap-2">
                Connect
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </span>
            </button>
          </ScrollLink>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
