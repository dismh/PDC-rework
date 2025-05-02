import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils.js";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        }}
        className="mt-8 text-center"
      >
        <h1 className="bg-gradient-to-br from-cyan-500 to-pink-500 dark:from-pink-300 dark:to-cyan-200 py-4 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
          Cash Prizes
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto">
          Celebrate excellence with exciting rewards for our top performers!
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Winner",
              amount: "₹30,000",
              description: "For the ultimate champion of the competition.",
            },
            {
              title: "Runner Up",
              amount: "₹21,000",
              description: "For outstanding performance and effort.",
            },
            {
              title: "Best Orator",
              amount: "₹7,000",
              description: "For exceptional eloquence and delivery.",
            },
          ].map((prize, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative p-6 bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-2xl blur-sm" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{prize.title}</h2>
                <p className="mt-2 text-4xl font-bold text-cyan-600 dark:text-cyan-400">{prize.amount}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{prize.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-600 via-transparent to-transparent text-black dark:text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-white dark:bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-white dark:bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-pink-500 text-black dark:text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-full right-0 bg-white dark:bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-white dark:bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-white dark:bg-slate-950 blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-400 opacity-50 blur-3xl" />
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-pink-400 blur-2xl"
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-pink-300"
        />
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-white dark:bg-slate-950" />
      </div>
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5 text-black dark:text-white">
        {children}
      </div>
    </div>
  );
};
