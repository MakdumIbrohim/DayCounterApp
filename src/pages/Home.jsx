import React from "react";
import Navbar from "../components/Navbar";
import DatePicker from "../components/DateRangePicker";

const Home = () => {
  return (
    <div className="flex justify-center items-end w-[80%] h-auto bg-blue-500 text-white p-6 text-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="text-left">
        <p className="mb-4">
          Select a date range to calculate the number of days between two dates.
        </p>
        <DatePicker />
      </div>
    </div>
  );
};

export default Home;
