import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Skooli</h1>
      
      {/* Get Started Button */}
      <button
        onClick={() => navigate("/TypePage")}
        className="px-6 py-3 bg-skooligreen1 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-skooligreen2 transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;