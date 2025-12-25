import React, { useState } from "react";
import DatePicker from "react-datepicker";
import DurationDisplay from "./DurationDisplay";
import HistoryDisplay from "./HistoryDisplay";
import "react-datepicker/dist/react-datepicker.css";

export default function DateRangePicker({ isDarkMode }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const setPresetDateRange = (days) => {
    const today = new Date();
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - days);

    setStartDate(pastDate);
    setEndDate(today);
  };

  const inputClassName = `border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${isDarkMode
    ? "bg-gray-700 border-gray-600 text-white"
    : "bg-white text-gray-900"
    }`;

  const labelClassName = `mb-2 font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"
    }`;

  return (
    <div className="flex flex-col items-start p-5 gap-4">
      <div className="flex flex-row gap-6">
        {/* Input Tanggal Awal */}
        <div className="flex flex-col w-full max-w-xs">
          <label className={labelClassName}>Tanggal Awal</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Pilih tanggal awal"
            className={inputClassName}
          />
        </div>

        {/* Input Tanggal Akhir */}
        <div className="flex flex-col w-full max-w-xs">
          <label className={labelClassName}>
            Tanggal Akhir
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Pilih tanggal akhir"
            className={inputClassName}
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
        <DurationDisplay startDate={startDate} endDate={endDate} isDarkMode={isDarkMode} />
        <HistoryDisplay isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
