"use client";
import Image from "next/image";
import React from "react";
import { Dancing_Script } from "next/font/google";
import { FaFigma } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { ReactTyped } from "react-typed";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
});

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center my-16 lg:my-20 gap-10 px-6 sm:px-10 lg:px-20">
      {/* Left Section - Image */}
      <div className="flex justify-center">
        <Image
          src="/bhargavi.jpg"
          width={250}
          height={250}
          alt="journey image"
          className="rounded-2xl w-64 sm:w-80 md:w-96 object-cover"
        />
      </div>

      {/* Middle Section - About & Education */}
      <div className="w-full lg:w-1/3 text-center lg:text-left">
        {/* Hello + Typed Text */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center sm:items-baseline">
          <div
            className={`text-5xl sm:text-6xl md:text-7xl font-bold text-[#0874AE] ${dancingScript.className} mr-2`}
          >
            Hello !
          </div>
        </div>

        {/* Typed Text */}
        <div className="mt-4 text-lg sm:text-xl">
          I am{" "}
          <span className="font-bold uppercase text-[#0874AE]">
            <ReactTyped
              strings={[
                "a Curious Artist",
                "a Dreamer with a Brush",
                "Bhargavi Shinde",
              ]}
              typeSpeed={80}
              backSpeed={40}
              loop
            />
          </span>
        </div>

        {/* Description */}
        <div className="mt-4 text-base sm:text-lg leading-relaxed text-gray-200">
          A brush, a thought, and way too much overthinking — that’s how most of
          my work begins. Some days it flows, some days it’s just me staring at
          the canvas, pretending to be inspired.
        </div>
        <div className="mt-2 text-base sm:text-lg">Hope you enjoy my portfolio!</div>

        {/* Education */}
        <div className="mt-10">
          <div className="text-2xl sm:text-3xl font-bold text-[#0874AE] mb-2">
            Education
          </div>
          <div className="text-gray-300">Bachelor of Fine Arts — Pune University</div>
        </div>
      </div>

      {/* Right Section - Skills & Experience */}
      <div className="w-full lg:w-1/3 text-center lg:text-left">
        {/* Skills */}
        <div>
          <div className="text-2xl sm:text-3xl font-bold text-[#0874AE] mb-2">
            Skills
          </div>
          <div className="my-4 flex justify-center lg:justify-start gap-6 text-5xl">
            <FaFigma className="hover:text-[#a259ff] transition-colors duration-300" />
            <SiCanva className="hover:text-[#00c4cc] transition-colors duration-300" />
          </div>
        </div>

        {/* Experience */}
        <div className="mt-8">
          <div className="text-2xl sm:text-3xl font-bold text-[#0874AE] mb-2">
            Experience
          </div>
          <div className="text-gray-300">
            <div>Art Teacher — 2 years of guiding young creators 🎨</div>
          </div>
        </div>
      </div>
    </div>
  );
}
