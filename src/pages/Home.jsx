import React, { useState } from "react";
import DatePicker from "../components/DateRangePicker";
import AgeCalculator from "../components/AgeCalculator";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('duration'); // 'duration' or 'age'

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4">
      <div className={`w-full max-w-lg p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Day Counter App</h3>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-md ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        
        <div className="mb-6">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              className={`py-2 px-4 font-medium ${activeTab === 'duration' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}
              onClick={() => setActiveTab('duration')}
            >
              Kalkulator Durasi
            </button>
            <button
              className={`py-2 px-4 font-medium ${activeTab === 'age' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}
              onClick={() => setActiveTab('age')}
            >
              Kalkulator Usia
            </button>
          </div>
          
          <div className="mt-4">
            {activeTab === 'duration' && (
              <>
                <p className="mb-4">
                  Pilih rentang tanggal untuk menghitung durasi antara dua tanggal.
                </p>
                <DatePicker />
              </>
            )}
            
            {activeTab === 'age' && (
              <>
                <p className="mb-4">
                  Pilih tanggal lahir untuk menghitung usia Anda.
                </p>
                <AgeCalculator />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
