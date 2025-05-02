import { motion } from "framer-motion";

const PreparationAndTimings = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const timingSignals = [
    {
      title: (
        <>
          Substantive Speeches
          <br />
          (5 + 1 Minutes)
        </>
      ),
      timings: [
        { time: "1st Minute", signal: "Single knock" },
        { time: "5th Minute", signal: "Single knock" },
        { time: "6th Minute", signal: "Double knock" },
      ],
    },
    {
      title: (
        <>
          Reply Speeches
          <br />
          (3 + 1 Minutes)
        </>
      ),
      timings: [
        { time: "3rd Minute", signal: "Single knock" },
        { time: "4th Minute", signal: "Double knock" },
      ],
    },
  ];

  return (
    <section
      id="preparation-timing"
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300 max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={headingVariants}
        >
          Preparation & Timing Guidelines
        </motion.h2>

        {/* Preparation Section */}
        <motion.div
          className="mb-16 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionVariants}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-6 ml-6 relative"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            Preparation Protocol
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
          </motion.h3>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8 transition hover:shadow-xl">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Matchups and venues will be announced before motions are revealed.
              Once the motions are released, teams must immediately rank their
              motions and select one in the presence of the runner and/or
              adjudicators. Teams then proceed to their designated venues to
              prepare. From the time of motion release, teams have{" "}
              <span className="font-bold text-indigo-600 dark:text-indigo-400">
                20 minutes
              </span>{" "}
              of preparation time.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>
                No access to electronic media or storage devices after motions
                are released.
              </li>
              <li>Teams must prepare independently without external assistance.</li>
              <li>
                Any contact with coaches, friends, or observers for assistance is
                considered cheating and will lead to disqualification.
              </li>
              <li>
                The adjudicator's decision in such cases is final and binding.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Timing Section */}
        <motion.div
          className="mb-16 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionVariants}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-6 ml-6 relative"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            Speech Timings & Signals
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {timingSignals.map((section, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 transition hover:shadow-xl"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <h4 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {section.timings.map((timing, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-32 font-semibold">{timing.time}:</span>
                      <span>{timing.signal}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            After the double knock, speakers have a{" "}
            <span className="font-bold text-indigo-600 dark:text-indigo-400">
              20-second grace period
            </span>{" "}
            to conclude. Exceeding this may result in penalties as determined by
            the adjudicator.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default PreparationAndTimings;
