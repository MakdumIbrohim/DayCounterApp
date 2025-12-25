import React, { useState } from "react";
import DatePicker from "react-datepicker";
import DurationDisplay from "./DurationDisplay";
import HistoryDisplay from "./HistoryDisplay";
import "react-datepicker/dist/react-datepicker.css";

export default function DateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const setPresetDateRange = (days) => {
    const today = new Date();
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - days);
    
    setStartDate(pastDate);
    setEndDate(today);
  };

  return (
    <div className="flex flex-col items-start p-5 gap-4">
      <div className="flex flex-row gap-6">
        {/* Input Tanggal Awal */}
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2 text-gray-700 font-medium dark:text-gray-300">Tanggal Awal</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Pilih tanggal awal"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Input Tanggal Akhir */}
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2 text-gray-700 font-medium dark:text-gray-300">
            Tanggal Akhir
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Pilih tanggal akhir"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        <button 
          onClick={() => setPresetDateRange(7)}
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          7 Hari
        </button>
        <button 
          onClick={() => setPresetDateRange(30)}
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          30 Hari
        </button>
        <button 
          onClick={() => setPresetDateRange(90)}
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          90 Hari
        </button>
        <button 
          onClick={() => setPresetDateRange(365)}
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          1 Tahun
        </button>
      </div>

      <div className="mt-4 w-full text-center">
        <DurationDisplay startDate={startDate} endDate={endDate} />
        <HistoryDisplay />
      </div>
    </div>
  );
}
