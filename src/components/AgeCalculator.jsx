import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AgeCalculator = () => {
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

  return (
    <div className="w-full max-w-lg p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Kalkulator Usia</h3>
      <div className="flex flex-col w-full max-w-xs mx-auto">
        <label className="mb-2 text-gray-700 font-medium dark:text-gray-300">Tanggal Lahir</label>
        <DatePicker
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Pilih tanggal lahir"
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {birthDate && (
        <div className="mt-4 w-full">
          <div className="text-lg font-semibold bg-gray-100 dark:bg-gray-700 p-3 rounded-md mb-2">
            Usia: {age}
          </div>
          <div className="text-lg font-semibold bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
            Hari Hidup: {daysLived}
          </div>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;