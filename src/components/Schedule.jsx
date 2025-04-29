import { motion } from "framer-motion";
import { CalendarDays, Clock } from "lucide-react"; // Lucide icons for styling

const Schedule = () => {
  const scheduleItems = [
    {
      title: "Day 1: Opening Ceremony",
      time: "June 10, 2025 | 9:00 AM - 12:00 PM",
    },
    {
      title: "Day 1: Preliminary Rounds",
      time: "June 10, 2025 | 1:00 PM - 6:00 PM",
    },
    {
      title: "Day 2: Semi Finals",
      time: "June 11, 2025 | 10:00 AM - 1:00 PM",
    },
    {
      title: "Day 2: Finals & Closing Ceremony",
      time: "June 11, 2025 | 3:00 PM - 6:00 PM",
    },
  ];

  return (
    <section
      id="schedule"
      className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Event Schedule
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1 md:left-2 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-pink-500 rounded-full"></div>

          <ul className="space-y-12 pl-6 md:pl-10">
            {scheduleItems.map((item, index) => (
              <motion.li
                key={index}
                className="relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-indigo-400 dark:border-indigo-600"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: false }}
              >
                <span className="absolute -left-4 top-6 w-6 h-6 rounded-full bg-indigo-500 dark:bg-indigo-400 border-4 border-white dark:border-gray-900"></span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-pink-500" />
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2 text-lg">
                  <Clock className="w-5 h-5 text-purple-500" />
                  {item.time}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
