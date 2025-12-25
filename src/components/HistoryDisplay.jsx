import React, { useState, useEffect } from 'react';

const HistoryDisplay = () => {
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
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        {showHistory ? 'Sembunyikan Riwayat' : 'Tampilkan Riwayat'}
      </button>
      
      {showHistory && (
        <div className="mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Riwayat Perhitungan</h3>
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
            <p className="text-gray-500 dark:text-gray-400 italic">Belum ada riwayat perhitungan</p>
          ) : (
            <ul className="space-y-3">
              {history.map((entry) => (
                <li 
                  key={entry.id} 
                  className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0 last:pb-0"
                >
                  <div className="font-medium">
                    {entry.startDate} → {entry.endDate}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Durasi: {entry.duration}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Hari Kerja: {entry.businessDays}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
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