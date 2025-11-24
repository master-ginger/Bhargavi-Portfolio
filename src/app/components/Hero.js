"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden flex justify-center items-center">

      {/* 🔥 Animated Background Layer */}
      <motion.div
        className="absolute inset-0 bg-[url('/herobg2.jpg')] bg-cover bg-center"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 7, ease: "easeOut" }}
      />

      {/* Overlay for blur + darkness */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[3px]"></div>

      {/* Content */}
      <motion.div 
        className="relative text-center text-white px-4 sm:px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div 
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
        >
          Art. Emotion. Essence.
        </motion.div>

        <motion.div
          className="text-base sm:text-lg md:text-xl lg:text-2xl mt-3 text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
        >
          Where Every Color Whispers a Story
        </motion.div>
      </motion.div>
    </div>
  );
}
