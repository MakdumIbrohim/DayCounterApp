import React, { useState, useEffect } from 'react';

const HistoryDisplay = ({ isDarkMode }) => {
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const savedHistory = localStorage.getItem('dayCounterHistory');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Error loading history:', e);
      }
    }
  }, [showHistory]);

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('dayCounterHistory');
    // Update state to reflect cleared history
    setHistory([]);
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="mt-4">
      <button
        onClick={toggleHistory}
        className={`px-4 py-2 rounded-md transition-colors ${isDarkMode
            ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
      >
        {showHistory ? 'Sembunyikan Riwayat' : 'Tampilkan Riwayat'}
      </button>

      {showHistory && (
        <div className={`mt-4 rounded-lg shadow-lg p-4 max-h-96 overflow-y-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
          <div className="flex justify-between items-center mb-3">
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Riwayat Perhitungan</h3>
            {history.length > 0 && (
              <button
                onClick={clearHistory}
                className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition-colors"
              >
                Hapus Semua
              </button>
            )}
          </div>

          {history.length === 0 ? (
            <p className={`italic ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Belum ada riwayat perhitungan</p>
          ) : (
            <ul className="space-y-3">
              {history.map((entry) => (
                <li
                  key={entry.id}
                  className={`border-b pb-3 last:border-0 last:pb-0 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'
                    }`}
                >
                  <div className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                    {entry.startDate} → {entry.endDate}
                  </div>
                  <div className={`text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Durasi: {entry.duration}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Hari Kerja: {entry.businessDays}
                  </div>
                  <div className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {new Date(entry.timestamp).toLocaleString('id-ID')}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default HistoryDisplay;