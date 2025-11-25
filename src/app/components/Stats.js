"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import Link from "next/link";

/**
 * Counter component
 * - `to`: final number
 * - `duration`: seconds for the animation
 */
function Counter({ to = 0, duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  // motion value that we will animate
  const motionVal = useMotionValue(0);

  // local state used to render the rounded value
  const [display, setDisplay] = useState(0);

  // subscribe to motion value changes and update display
  useEffect(() => {
    const unsubscribe = motionVal.on("change", (v) => {
      setDisplay(Math.round(v));
    });
    return () => unsubscribe();
  }, [motionVal]);

  // when in view, animate the motion value to the target
  useEffect(() => {
    let animation;
    if (inView) {
      animation = animate(motionVal, to, { duration, ease: "easeOut" });
    }
    return () => animation && animation.stop();
  }, [inView, motionVal, to, duration]);

  return (
    <span ref={ref} aria-live="polite" className="inline-block">
      {display}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    { label: "Artworks Created", value: 100 },
    { label: "Happy Clients", value: 20 },
    { label: "Years of Experience", value: 3 },
    { label: "Custom Commissions", value: 20 },
  ];

  return (
    <div className="w-full py-20 ">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold">My Journey So Far</h2>
        <p className="text-gray-400 mt-2 text-lg">A glance at my artistic milestones</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="text-4xl sm:text-5xl font-extrabold text-white">
              <Counter to={item.value} duration={1.4} />
            </div>
            <div className="mt-2 text-gray-400 font-semibold text-lg text-center">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>

     <div className="w-full flex justify-center mt-10">
  <Link href="/pricing">
    <button className="px-8 py-3 rounded-full border border-[#0874AE] text-[#0874AE] font-semibold 
                       hover:bg-[#0874AE] hover:text-white transition-all duration-300">
      Check Pricing
    </button>

    
  </Link>
  <Link href='/productsPage'>
  <button className="px-8 py-3 ml-10 rounded-full border hover:bg-black hover:border-[#0874AE] hover:text-[#0874AE] font-semibold 
                       bg-[#0874AE] text-white transition-all duration-300">
      View Products
    </button>
  </Link>
</div>


    </div>
  );
}
