const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          About PDC
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Parliamentary debates let the students express their ideas freely,
          where they debate upon the contemporary issues and discuss about the
          possible solutions to the problems. This will help students develop
          critical thinking skills and refine their ability to communicate.
        </p>

        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white dark:bg-gray-700 rounded shadow text-center text-gray-800 dark:text-gray-200">
          <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-indigo-300 bg-clip-text text-xl font-extrabold text-transparent text-center select-auto drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">
            “The strength of an argument lies not in who presents it, but in the
            validity of its reasoning and evidence.”
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
