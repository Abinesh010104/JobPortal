import React from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

const Banner = ({
  query,
  handleInputChange,
  location,
  handleLocationChange,
}) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
        Your <span className="text-[#39AEF1]">Dream Job</span> Awaits
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Dive into a sea of opportunities in the tech, engineering, and computer
        fields.
      </p>
      <form action="">
        <div className="flex justify-center md:justify-start flex-col md:flex-row md:gap-4 gap-4">
          <div className="flex items-center shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full relative">
            <FiSearch className="absolute ml-3 text-gray-400" />
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What position are you looking for?"
              className="block flex-1 border-0 bg-transparent py-3 pl-10 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={query}
            />
          </div>
          <div className="flex items-center shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full relative">
            <FiMapPin className="absolute ml-3 text-gray-400" />
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              className="block flex-1 border-0 bg-transparent py-3 pl-10 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              onChange={handleLocationChange}
              value={location}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Banner;
