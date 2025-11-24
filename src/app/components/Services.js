"use client";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="mb-40 px-4 md:px-10">
      <div className="text-center text-4xl sm:text-5xl mt-20 mb-10 font-extrabold">
        Services
      </div>

      {/* Animation container */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1 justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {[ 
          { title: "Customized Paintings", descr: "Bring your imagination to life with personalized artwork made just for you." },
          { title: "Pencil Sketches", descr: "Timeless pencil art capturing expressions and emotions in every stroke." },
          { title: "Couple Sketches", descr: "Celebrate love with detailed couple portraits that tell your story." },
          { title: "Portraits", descr: "Realistic and expressive portraits crafted with precision and care." },
          { title: "Wall Murals", descr: "Transform blank walls into breathtaking pieces of art that inspire." },
          { title: "Digital Illustrations", descr: "Modern, vibrant digital art perfect for gifts, prints, or branding." },
          { title: "Canvas Paintings", descr: "Hand-painted masterpieces that add elegance and charm to any space." },
          { title: "Pet Portraits", descr: "Cherish your furry friends with lifelike pet portraits full of character." },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="w-full lg:w-full"
          >
            <ServiceCard title={item.title} descr={item.descr} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
