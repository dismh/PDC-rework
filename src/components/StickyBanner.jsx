// components/StickyBanner.jsx
import React from "react";

const StickyBanner = () => {
  const handleClick = () => {
    const el = document.querySelector(".register");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white flex items-center justify-between px-4 py-2 shadow-md">
      <span className="text-sm sm:text-base font-semibold">
        🎉 Exciting prizes await—don't miss out!
      </span>
      <button
        onClick={handleClick}
        className="ml-4 bg-white text-black text-xs sm:text-sm font-bold px-3 py-1 rounded-full hover:bg-gray-200 transition"
      >
        Register
      </button>
    </div>
  );
};

export default StickyBanner;
