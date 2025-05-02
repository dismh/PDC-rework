import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0 scale-y-125">
        {/* Left Gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-40 w-[80%] max-w-xs sm:h-56 sm:max-w-lg sm:w-[30rem] bg-gradient-conic from-cyan-600 via-transparent to-transparent text-black dark:text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute bottom-0 left-0 h-32 sm:h-40 w-full bg-white dark:bg-slate-950 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 h-full w-32 sm:w-40 bg-white dark:bg-slate-950 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right Gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-40 w-[80%] max-w-xs sm:h-56 sm:max-w-lg sm:w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-600 text-black dark:text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute bottom-0 right-0 h-full w-32 sm:w-40 bg-white dark:bg-slate-950 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute bottom-0 right-0 h-32 sm:h-40 w-full bg-white dark:bg-slate-950 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Central Blurs & Overlays */}
        <div className="absolute top-1/2 w-full h-32 sm:h-48 translate-y-12 sm:translate-y-14 scale-x-150 bg-white dark:bg-slate-950 blur-2xl" />
        <div className="absolute top-1/2 w-full h-32 sm:h-48 translate-y-12 sm:translate-y-14 bg-transparent opacity-10 backdrop-blur-md z-50" />
        <div className="absolute inset-auto z-50 w-64 sm:w-[28rem] h-24 sm:h-36 -translate-y-12 sm:-translate-y-16 rounded-full bg-cyan-400 opacity-50 blur-3xl" />

        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-24 sm:h-36 w-48 sm:w-[16rem] -translate-y-[5rem] sm:-translate-y-[6rem] rounded-full bg-cyan-300 blur-2xl"
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[70%] max-w-xs sm:w-[30rem] -translate-y-[6.5rem] sm:-translate-y-[7rem] bg-cyan-300"
        />
        <div className="absolute inset-auto z-40 w-full h-32 sm:h-44 -translate-y-[11rem] sm:-translate-y-[12.5rem] bg-white dark:bg-slate-950" />
      </div>

      {/* Content */}
      <div className="relative z-50 flex flex-col items-center px-4 sm:px-6 -translate-y-5 text-black dark:text-white">
        {children}
      </div>
    </div>
  );
};
