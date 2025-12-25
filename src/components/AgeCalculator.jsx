import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AgeCalculator = ({ isDarkMode }) => {
  const [birthDate, setBirthDate] = useState(null);

  const calculateAge = (date) => {
    if (!date) return 'Pilih tanggal lahir untuk menghitung usia';

    const today = new Date();
    const birthDt = new Date(date);

    let years = today.getFullYear() - birthDt.getFullYear();
    let months = today.getMonth() - birthDt.getMonth();
    let days = today.getDate() - birthDt.getDate();

    if (days < 0) {
      months--;
      // Get days in previous month
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} tahun, ${months} bulan, ${days} hari`;
  };

  const calculateDaysLived = (date) => {
    if (!date) return 'Pilih tanggal lahir untuk menghitung hari hidup';

    const birthDt = new Date(date);
    const today = new Date();
    const diffInMs = today - birthDt;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    return `${diffInDays} hari`;
  };

  const age = calculateAge(birthDate);
  const daysLived = calculateDaysLived(birthDate);

  const inputClassName = `border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${isDarkMode
      ? "bg-gray-700 border-gray-600 text-white"
      : "bg-white text-gray-900"
    }`;

  const labelClassName = `mb-2 font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"
    }`;

  const resultBoxClassName = `text-lg font-semibold p-3 rounded-md mb-2 ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
    }`;

  return (
    <div className="w-full max-w-lg p-6">
      <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Kalkulator Usia</h3>
      <div className="flex flex-col w-full max-w-xs mx-auto">
        <label className={labelClassName}>Tanggal Lahir</label>
        <DatePicker
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Pilih tanggal lahir"
          className={inputClassName}
        />
      </div>

      {birthDate && (
        <div className="mt-4 w-full">
          <div className={resultBoxClassName}>
            Usia: {age}
          </div>
          <div className={`text-lg font-semibold p-3 rounded-md ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"}`}>
            Hari Hidup: {daysLived}
          </div>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;