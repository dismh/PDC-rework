import { motion } from "framer-motion"; // For animations

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        {/* Title with Animation */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Doon International School PDC Championship
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The <b>Doon International School PDC Championship</b> is a prestigious parliamentary debate competition that empowers students to voice their ideas, engage with contemporary issues, and propose innovative solutions. Hosted by Doon International School, this championship fosters critical thinking, eloquent communication, and collaborative problem-solving, preparing students to become global thought leaders.
        </motion.p>

        {/* Venue Information */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Venue
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Doon International School, Sector 69, <br />
            Sahibzada Ajit Singh Nagar, Punjab
          </p>
        </motion.div>

        {/* Quote Card */}
        <motion.div
          className="max-w-3xl mx-auto mt-12 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h1 className="text-xl md:text-2xl font-bold text-center bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
            “The strength of an argument lies not in who presents it, but in the
            validity of its reasoning and evidence.”
          </h1>
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#register"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Join the Championship
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;