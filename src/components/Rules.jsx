import { motion } from "framer-motion"; // Correct import for animations

const Rules = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="rules"
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        {/* Title with Animation */}
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300 max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={headingVariants}
        >
          Rules of the PDC Championship
        </motion.h2>

        {/* Format Section */}
        <motion.div
          className="mb-12 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionVariants}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-4 ml-6 relative"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            Format
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
          </motion.h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-loose pl-4">
            Each debating match pits two teams against each other: one to{" "}
            <span className="font-bold">propose</span> the motion (known as “The
            Proposition,” “The Affirmative,” or “The Government”) and one to{" "}
            <span className="font-bold">oppose</span> it (known as “The
            Opposition” or “The Negative”). Teams are assigned roles for each
            round. An adjudicator oversees the debate, with a timekeeper ensuring
            proper timing. The adjudicator’s decision is final.
          </p>
        </motion.div>

        {/* Team Composition Section */}
        <motion.div
          className="mb-12 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionVariants}
          transition={{ delay: 0.2 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-4 ml-6 relative"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            Team Composition
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
          </motion.h3>
          <div className="flex flex-col md:flex-row gap-8 pl-4">
            {/* Affirmative Team */}
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02, y: -3, transition: { duration: 0.3 } }}
            >
              <h4 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                Affirmative Team
              </h4>
              <ul className="text-xl text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>Prime Minister (First Affirmative)</li>
                <li>Deputy Prime Minister (Second Affirmative)</li>
                <li>Government Whip (Third Affirmative)</li>
              </ul>
            </motion.div>
            {/* Negative Team */}
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02, y: -3, transition: { duration: 0.3 } }}
            >
              <h4 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                Negative Team
              </h4>
              <ul className="text-xl text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>Leader of Opposition (First Negative)</li>
                <li>Deputy Leader of Opposition (Second Negative)</li>
                <li>Opposition Whip (Third Negative)</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Flow of Debate Section */}
        <motion.div
          className="mb-12 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionVariants}
          transition={{ delay: 0.4 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-4 ml-6 relative"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            Flow of Debate
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
          </motion.h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-loose mb-4 pl-4">
            Debaters speak in the following order:
          </p>
          <div className="max-w-2xl mx-auto space-y-4 pl-4">
            {[
              "Prime Minister",
              "Leader of Opposition",
              "Deputy Prime Minister",
              "Deputy Leader of Opposition",
              "Government Whip",
              "Opposition Whip",
            ].map((speaker, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-2 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * index }}
                viewport={{ once: false }}
              >
                <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-sm">
                  {index + 1}
                </div>
                <span className="text-xl text-gray-800 dark:text-gray-200">
                  {speaker}
                </span>
                <svg
                  className="w-5 h-5 text-indigo-500 dark:text-indigo-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.div>
            ))}
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-loose mt-4 pl-4">
            The debate concludes with the Opposition’s reply, followed by the
            Government’s reply. Note: Whips from both teams cannot deliver the
            reply.
          </p>
        </motion.div>

        {/* Motions Section */}
        <motion.div
          className="mb-12 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionVariants}
          transition={{ delay: 0.6 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-4 ml-6 relative"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            Motions
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
          </motion.h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-loose pl-4">
            Each round features motions tied to a specific, well-known theme, with
            three motion choices provided. Teams rank the motions by preference,
            and the third-ranked option from each team is eliminated. If a clear
            favorite emerges, it is selected. In case of a tie, a coin toss
            determines the motion, overseen by the adjudicator.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Rules;