import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from "../assets/Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      const headerOffset = 80;
      const sectionPosition =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition - headerOffset,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-blue-800 dark:bg-blue-900 text-white py-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={img} alt="Logo" className="h-20 w-20" />
          <h1 className="text-2xl font-bold">PDC 2025</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {["home", "about", "schedule", "register", "contact"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleScroll(e, `#${id}`)}
                  className="hover:text-blue-300 dark:hover:text-blue-400 capitalize"
                >
                  {id}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleDarkMode}
            className={`relative inline-flex items-center w-20 h-10 rounded-full transition-all duration-500 ml-4 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-400 to-indigo-500"
                : "bg-gradient-to-r from-yellow-300 to-orange-400"
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full flex items-center justify-center transition-all duration-500 transform ${
                isDarkMode ? "translate-x-10" : "translate-x-0"
              } shadow-md text-lg`}
            >
              {isDarkMode ? "🌙" : "☀️"}
            </span>
          </button>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            className={`relative inline-flex items-center w-20 h-10 rounded-full transition-all duration-500 mr-4 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-400 to-indigo-500"
                : "bg-gradient-to-r from-yellow-300 to-orange-400"
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full flex items-center justify-center transition-all duration-500 transform ${
                isDarkMode ? "translate-x-10" : "translate-x-0"
              } shadow-md text-lg`}
            >
              {isDarkMode ? "🌙" : "☀️"}
            </span>
          </button>
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden bg-blue-800 dark:bg-blue-900 rounded-b-xl px-4 py-4 shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-3 text-lg">
              {["home", "about", "schedule", "register", "contact"].map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleScroll(e, `#${id}`)}
                    className="block text-white hover:text-blue-300 dark:hover:text-blue-400 capitalize"
                  >
                    {id}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
