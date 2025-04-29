const Schedule = () => {
  return (
    <section id="schedule" className="bg-gray-200 dark:bg-gray-800 py-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Event Schedule
        </h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            <li className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Day 1: Opening Ceremony
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                June 10, 2025 | 9:00 AM - 12:00 PM
              </p>
            </li>
            <li className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Day 1: Preliminary Rounds
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                June 10, 2025 | 1:00 PM - 6:00 PM
              </p>
            </li>
            <li className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Day 2: Quarterfinals & Semifinals
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                June 11, 2025 | 10:00 AM - 5:00 PM
              </p>
            </li>
            <li className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Day 3: Finals & Awards
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                June 12, 2025 | 10:00 AM - 3:00 PM
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Schedule;