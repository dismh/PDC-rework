import React from "react";
import { motion } from "framer-motion";

export function CashPrizes() {
  // Card animation variants
  const cardVariants = {
    rest: {
      scale: 1,
      y: 0,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.08,
      y: -15,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(34, 211, 238, 0.5)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 dark:from-slate-900 dark:to-slate-950 overflow-hidden mt-5 mb-5 z-0">
      {/* Futuristic Background Glow */}
       <section id="prizes">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 dark:bg-cyan-400 rounded-full opacity-30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 dark:bg-cyan-400 rounded-full opacity-30 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-cyan-300 dark:to-cyan-500 tracking-tight mb-12"
        >
          Cash Prizes
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
          {/* Runner Up Team Card */}
          <motion.div
            variants={cardVariants}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
            whileHover="hover"
            animate="rest"
            className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl p-6 w-64 text-center border border-gray-200/50 dark:border-cyan-500/50 shadow-lg"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent to-cyan-500/20 dark:to-cyan-400/30 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Runner Up Team
            </h2>
            <p className="text-2xl font-bold text-gray-700 dark:text-cyan-300 mt-2">
              INR 21,000
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              For the team showcasing outstanding debate skills and compelling arguments.
            </p>
          </motion.div>

          {/* Winner Team Card */}
          <motion.div
            variants={cardVariants}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
            whileHover="hover"
            animate="rest"
            className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-8 w-72 text-center border-4 border-cyan-500 dark:border-cyan-400 shadow-xl scale-110"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-cyan-500/40 dark:from-cyan-400/30 dark:to-cyan-400/50 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Winner Team
            </h2>
            <p className="text-3xl font-extrabold text-cyan-600 dark:text-cyan-300 mt-2">
              INR 30,000
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Awarded to the team excelling in eloquence, strategy, and persuasive delivery.
            </p>
          </motion.div>

          {/* Best Speaker Card */}
          <motion.div
            variants={cardVariants}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
            whileHover="hover"
            animate="rest"
            className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl p-6 w-64 text-center border border-gray-200/50 dark:border-cyan-500/50 shadow-lg"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent to-cyan-500/20 dark:to-cyan-400/30 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Best Speaker
            </h2>
            <p className="text-2xl font-bold text-gray-700 dark:text-cyan-300 mt-2">
              INR 7,000
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              For the debater with exceptional clarity, wit, and impactful oration.
            </p>
          </motion.div>
        </div>
      </div>
      </section>
    </div>
  );
}