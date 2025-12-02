import React from "react";

const HeroSection = () => {
  return (
    <header className="bg-white text-center py-20 px-6">
      <h2 className="text-4xl font-bold mb-4">Tackling the Challenge of Odd School Structures</h2>
      <p className="text-lg text-gray-700 mb-6">
        145,012 schools in India fall into non-standard categories, affecting policy implementation and educational equity. Let's fix this together.
      </p>
      <button
        onClick={() => document.getElementById("solutions").scrollIntoView({ behavior: "smooth" })}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full"
      >
        Explore Solutions
      </button>
    </header>
  );
};

export default HeroSection;