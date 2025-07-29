import React from "react";
import electricBike from "../assets/vehicleType/electric.png";
import scrambler from "../assets/vehicleType/scrambler.png";
import smallerBike from "../assets/vehicleType/smallerbike.png";
import electricScooter from "../assets/vehicleType/electricScooter.png";
import sports from "../assets/vehicleType/sports.png";
import scooter from "../assets/vehicleType/scooter.png"; 
import nakedSport from "../assets/vehicleType/nakedSport.png";
import commuter from "../assets/vehicleType/commuter.png"; 
import dirt from "../assets/vehicleType/dirt.png";
import cruiser from "../assets/vehicleType/cruiser.png";
import classic from "../assets/vehicleType/classic.png";
import adventure from "../assets/vehicleType/adventure.png"; 

const types = [
  { label: "Electric Bike", img: electricBike },
  { label: "Scrambler", img: scrambler },
  { label: "Smaller Bike", img: smallerBike },
  { label: "Electric Scooter", img: electricScooter },
  { label: "Sports", img: sports },
  { label: "Scooter", img: scooter },
  { label: "Naked-Sport", img: nakedSport },
  { label: "Commuter", img: commuter },
  { label: "Dirt", img: dirt },
  { label: "Cruiser", img: cruiser },
  { label: "Classic", img: classic },
  { label: "Adventure", img: adventure },
];


const QuickSearchBodyType = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col justify-center items-center mb-6">
        <p className="text-lg font-medium text-gray-800">Make a Quick Search</p>
        <h2 className="text-2xl md:text-3xl font-normal text-gray-800">
          Vehicle{" "}
          <span className="text-orange-500 font-semibold">Body Type</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {types.map((type) => (
          <div
            key={type.label}
            className="group relative bg-white border border-gray-200 rounded-lg  p-4 text-center cursor-pointer transition duration-300 flex flex-col items-center justify-center space-y-2 h-36 overflow-hidden hover:shadow-md"
          >
            {/* Icon & Label wrapper */}
            <div className="flex flex-col items-center justify-center transform transition-transform duration-300 group-hover:scale-75">
              <img
                src={type.img}
                alt={type.label}
                className="w-36 object-contain"
              />
              <p className="text-sm font-medium text-gray-800">{type.label}</p>
            </div>

            {/* View All Button - fades in and slides up */}
            <div
              className="absolute inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex items-center justify-center 
                    opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-300 ease-out rounded-lg"
            >
              <button className="px-4 py-2 text-sm font-semibold bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition">
                View All
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickSearchBodyType;
