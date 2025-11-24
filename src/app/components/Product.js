"use client";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function Product() {
  // Animation variants for container (stagger)
  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  // Animation for individual cards
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="mb-10 px-4 md:px-10">
      <div className="text-center text-4xl sm:text-5xl mb-10 font-extrabold">
        My ArtWork
      </div>

      {/* ROW 1 */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariant}
      >
        <motion.div variants={cardVariant}><ProductCard url="/painting1.jpg" /></motion.div>
        <motion.div variants={cardVariant}><ProductCard url="/painting2.jpg" /></motion.div>
        <motion.div variants={cardVariant}><ProductCard url="/painting3.jpg" /></motion.div>
        <motion.div variants={cardVariant}><ProductCard url="/painting14.jpg" /></motion.div>
      </motion.div>

      {/* ROW 2 */}
      <motion.div
        className="grid grid-cols-2 mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariant}
      >
        <motion.div variants={cardVariant}><ProductCard url="/painting4.jpg" /></motion.div>
        <motion.div variants={cardVariant}><ProductCard url="/painting6.jpg" /></motion.div>
        <motion.div variants={cardVariant}><ProductCard url="/painting7.jpg" /></motion.div>
        <motion.div variants={cardVariant}><ProductCard url="/painting8.jpg" /></motion.div>
      </motion.div>

      {/* ROW 3 */}
      <motion.div
        className="grid grid-cols-2 mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariant}
      >
        <motion.div variants={cardVariant}><ProductCard url="/painting9.jpg" /></motion.div>
        <motion.div variants={cardVariant}><ProductCard url="/painting13.jpg" /></motion.div>
        <motion.div variants={cardVariant}><ProductCard url="/painting11.jpg" /></motion.div>
        <motion.div variants={cardVariant}><ProductCard url="/painting12.jpg" /></motion.div>
      </motion.div>
    </div>
  );
}
