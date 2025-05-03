// components/StickyBanner.jsx
import React, { useState } from "react";

const StickyBanner = () => {
  const [visible, setVisible] = useState(true);

  const scrollToSelector = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element not found for selector: ${selector}`);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white flex flex-wrap items-center justify-between px-4 py-3 gap-2 shadow-xl">
      <span className="text-sm sm:text-base font-semibold">
        🎉 Exciting prizes await—don't miss out!
      </span>

      <div className="flex gap-2 ml-auto items-center">
        <button
          onClick={() => scrollToSelector("#prizes")}
          className="bg-white text-black text-xs sm:text-sm font-semibold px-3 py-1 rounded-full hover:bg-gray-200 transition"
        >
          View Prizes
        </button>

        <button
          onClick={() => scrollToSelector("#register")}
          className="bg-yellow-300 text-black text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md hover:bg-yellow-400 transition border border-black"
        >
          Register
        </button>

        <button
          onClick={() => setVisible(false)}
          className="ml-2 text-black text-xl font-bold hover:text-gray-200 transition"
          title="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default StickyBanner;
