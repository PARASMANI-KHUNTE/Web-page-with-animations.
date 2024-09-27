import React, { useState } from "react";
import "../App.css";  // We'll add some custom animations in CSS

const ImageChainAnimation = () => {
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100"
  ];

  return (
    <div className="relative">
      {/* Chain container with hover-based pause */}
      <div
        className={`chain-container flex justify-between items-center overflow-hidden ${
          isPaused ? "paused" : ""
        }`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Image nodes */}
        {images.map((image, index) => (
          <div key={index} className="chain-node transition-transform duration-300 hover:scale-125">
            <img src={image} alt={`node-${index}`} className="w-24 h-24 object-cover" />
          </div>
        ))}
      </div>

      {/* Left and Right fades */}
      <div className="fade-left absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-300 to-transparent pointer-events-none"></div>
      <div className="fade-right absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-300 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default ImageChainAnimation;
