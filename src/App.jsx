import Header from './components/Header';
import Hero from './components/Hero';
// import { motion } from "motion/react";
import { motion } from "framer-motion";
import About from "./components/About";
import Rules from "./components/Rules";
import Schedule from "./components/Schedule";
import PreparationAndTimings from "./components/PreparationAndTimings.jsx";
import Register from "./components/Register";
import PoisAndConduct from "./components/PoisAndConduct.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css"; // or wherever your Tailwind CSS file is
import { AuroraBackground } from "./components/ui/aurora-background.jsx";
import { MacbookScroll } from "./components/ui/Macbook-Scroll.jsx";
import image from "./assets/tungtungsahur.jpg";
import { CalendarDays, Clock } from "lucide-react";
function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white" id="home">
      <Header />
      
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center" >
            Parliamentary Debate Championship 2025
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Join the ultimate clash of minds! Compete, debate, and shine.
          </div>
          <button
            href="#register"
            className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
          >
            <a href="#register"> Register now</a>
          </button>
        </motion.div>
      </AuroraBackground>
      <main>
        {/* <Hero /> */}
      
        <About />
        <Rules/>
        <PreparationAndTimings/>
        <PoisAndConduct/>
        <Schedule />
        <Register />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;