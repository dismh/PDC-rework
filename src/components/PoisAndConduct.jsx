import { motion } from "framer-motion";

const PoisAndConduct = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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

  const poisGuidelines = [
    "POIs may be offered during the six substantive speeches only.",
    "Any number of POIs can be asked during substantive speeches.",
    "No cross-questioning is allowed during the reply to a POI.",
    "To offer a POI, a member of the opposing team must rise and say “On that point, Sir/Madam”.",
    "Once accepted, the speaker must allow enough time for the question to be asked.",
    "POIs are judged on strategic use (Method), content (Matter), and excessive use (Manner).",
  ];

  const nukePoints = [
    "A NUKE is a compulsory POI — it must be answered.",
    "Only one NUKE can be asked by each team during a debate.",
    "To ask a NUKE, stand and say “NUKE” before stating your question.",
  ];

  const conductPoints = [
    "All participants must wear western formals on both days.",
    "You are representatives of your schools — behave respectfully and maintain decorum.",
    "Use of foul language is strictly prohibited and will lead to penalties.",
    "Disputes regarding scorecards will not be entertained — adjudicators' decisions are final.",
  ];

  return (
    <section
      id="pois-conduct"
      className="py-20 bg-gradient-to-b from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionVariants}
        >
          Points of Information & Code of Conduct
        </motion.h2>

        {/* POI Section */}
        <motion.div
          className="mb-16 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionVariants}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-6 ml-6 relative"
            variants={sectionVariants}
          >
            Points of Information (POIs)
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
          </motion.h3>

          <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8"
            variants={cardVariants}
          >
            <ul className="space-y-3 text-lg md:text-xl text-gray-700 dark:text-gray-300 list-disc list-inside">
              {poisGuidelines.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            {/* NUKE Info Box */}
            <div className="mt-8 p-6 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 border-l-4 border-pink-500 dark:border-pink-400 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold text-pink-700 dark:text-pink-300 mb-3">
                💣 NUKE (Compulsory POI)
              </h4>
              <ul className="list-disc list-inside text-lg md:text-xl text-gray-800 dark:text-gray-200 space-y-2">
                {nukePoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Code of Conduct Section */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionVariants}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-6 ml-6 relative"
            variants={sectionVariants}
          >
            Code of Conduct
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
          </motion.h3>

          <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8"
            variants={cardVariants}
          >
            <ul className="space-y-3 text-lg md:text-xl text-gray-700 dark:text-gray-300 list-disc list-inside">
              {conductPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PoisAndConduct;
