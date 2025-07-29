import React from "react";
import bgHome from "../assets/vivish-photography-4ab-uGbwnGE-unsplash.jpg";
import { Link } from "react-router-dom"; // needed for navigation

const Banner = () => {
  return (
    <div className="relative w-full h-[90vh]">
      <img
        src={bgHome}
        alt="BikeLove Banner"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 drop-shadow-md">
          Welcome to BikeLove
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white max-w-2xl drop-shadow">
          Your one-stop solution for all bike-related needs — from brands to
          blogs to deals.
        </p>
        <Link to="/all-bikes">
          <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition duration-300 shadow-lg">
            Browse All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
