"use client";
import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 py-16 px-6">
      {/* Page Title */}
      <div className="text-center mb-16">
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Pricing & Commission Guide
        </motion.h1>

        <motion.p
          className="mt-4 text-gray-400 sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Custom handmade artworks designed with passion and precision.
        </motion.p>
      </div>

      {/* Pricing Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Card 1 – Pencil Sketch */}
        <motion.div
          className="border border-gray-700 rounded-2xl p-8 bg-gray-900/40 backdrop-blur-sm shadow-lg"
          whileHover={{ scale: 1.04 }}
        >
          <h2 className="text-2xl font-bold text-white mb-3">Pencil Sketch</h2>
          <p className="text-gray-400 mb-6">
            Realistic black & white portrait handmade on premium sketch paper.
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>• A4 size – ₹800</li>
            <li>• A3 size – ₹1,500</li>
            <li>• A2 size – ₹2,500</li>
            <li>• Extra person – ₹500</li>
          </ul>
        </motion.div>

        {/* Card 2 – Acrylic Painting */}
        <motion.div
          className="border border-gray-700 rounded-2xl p-8 bg-gray-900/40 backdrop-blur-sm shadow-lg"
          whileHover={{ scale: 1.04 }}
        >
          <h2 className="text-2xl font-bold text-white mb-3">Acrylic Painting</h2>
          <p className="text-gray-400 mb-6">
            Vibrant, long-lasting artwork made using artist-grade acrylics.
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>• A4 size – ₹1,800</li>
            <li>• A3 size – ₹3,000</li>
            <li>• A2 size – ₹5,000</li>
            <li>• Canvas upgrade – +₹500</li>
          </ul>
        </motion.div>

        {/* Card 3 – Custom Artwork */}
        <motion.div
          className="border border-gray-700 rounded-2xl p-8 bg-gray-900/40 backdrop-blur-sm shadow-lg"
          whileHover={{ scale: 1.04 }}
        >
          <h2 className="text-2xl font-bold text-white mb-3">Custom Concept Art</h2>
          <p className="text-gray-400 mb-6">
            Custom backgrounds, fantasy themes, pets, couples, and more.
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>• Starts at – ₹2,000</li>
            <li>• Complex backgrounds – +₹500 to ₹2,000</li>
            <li>• Digital portrait available</li>
            <li>• Urgent delivery – +₹300</li>
          </ul>
        </motion.div>

      </div>

      {/* Process Section */}
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-center text-3xl font-bold text-white mb-10">
          Commission Process
        </h2>

        <div className="space-y-6 text-gray-300 text-lg">
          <p>1. Send your photo(s) and the size you want.</p>
          <p>2. I confirm the price and expected delivery date.</p>
          <p>3. 30% advance payment required to start.</p>
          <p>4. I share progress updates during creation.</p>
          <p>5. Final payment before delivery or shipping.</p>
        </div>
      </div>

      {/* Note */}
      <div className="text-center text-gray-400 text-sm mt-20">
        Prices may vary depending on complexity & detailing.
      </div>
    </div>
  );
}
