import React from "react";
import { motion } from "framer-motion";
// LampDemo component with hover animations on cards
export function LampDemo() {
  // Card hover animation variants
  const cardVariants = {
    rest: {
      scale: 1,
      y: 0,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 sm:mt-6 bg-gradient-to-br from-gray-900 to-gray-700 dark:from-slate-300 dark:to-slate-500 py-2 sm:py-4 bg-clip-text text-center text-3xl sm:text-4xl md:text-7xl font-medium tracking-tight text-transparent"
      >
        Cash Prizes
      </motion.h1>

      <div className="mt-10 flex flex-col md:flex-row gap-8 justify-center items-center">
        {/* Runner Up Team Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          variants={cardVariants}
          whileHover="hover"
          animate="rest"
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-64 text-center border border-gray-300 dark:border-gray-600"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Runner Up Team
          </h2>
          <p className="text-2xl font-bold text-gray-700 dark:text-gray-300 mt-2">
            INR 21,000
          </p>
        </motion.div>

        {/* Winner Team Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          variants={cardVariants}
          whileHover="hover"
          animate="rest"
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 w-72 text-center border-4 border-purple-500 dark:border-cyan-500 scale-110"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Winner Team
          </h2>
          <p className="text-3xl font-extrabold text-purple-600 dark:text-cyan-400 mt-2">
            INR 30,000
          </p>
        </motion.div>

        {/* Best Speaker Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
          variants={cardVariants}
          whileHover="hover"
          animate="rest"
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-64 text-center border border-gray-300 dark:border-gray-600"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Best Speaker
          </h2>
          <p className="text-2xl font-bold text-gray-700 dark:text-gray-300 mt-2">
            INR 7,000
          </p>
        </motion.div>
      </div>
    </LampContainer>
  );
}

// LampContainer component
