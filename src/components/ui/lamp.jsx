import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
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
export const LampContainer = ({ children }) => {
  return (
    <div
      className="relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-950 w-full rounded-md z-0"
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-purple-500 via-transparent to-transparent dark:from-cyan-500 dark:via-transparent dark:to-transparent text-black dark:text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-white dark:bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-white dark:bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-purple-500 dark:from-transparent dark:via-transparent dark:to-cyan-500 text-black dark:text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-white dark:bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-white dark:bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-white dark:bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-purple-700 dark:bg-cyan-500 opacity-50 blur-3xl"></div>

        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            usage: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-purple-400 dark:bg-cyan-400 blur-2xl"
        ></motion.div>

        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-purple-400 dark:bg-cyan-400"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-white dark:bg-slate-950"></div>
      </div>

      {/* Responsive translateY */}
      <div className="relative z-50 flex flex-col items-center px-5 translate-y-[-2rem] sm:translate-y-[-6rem] md:translate-y-[-10rem]">
        {children}
      </div>
    </div>
  );
};