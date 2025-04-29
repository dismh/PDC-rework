const Hero = () => {
  return (
    <section
      id="home"
      className="bg-blue-600 dark:bg-blue-900 text-white py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Parliamentary Debate Championship 2025
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Join the ultimate clash of minds! Compete, debate, and shine.
        </p>
        <a
          href="#register"
          className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-300 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 dark:hover:bg-gray-700"
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default Hero;