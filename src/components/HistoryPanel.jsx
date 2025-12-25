import React, { useState, useEffect } from 'react';

const HistoryPanel = () => {
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  // Load history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('dayCounterHistory');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Error loading history:', e);
      }
    }
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('dayCounterHistory', JSON.stringify(history));
  }, [history]);

  const addToHistory = (startDate, endDate, duration, businessDays) => {
    if (!startDate || !endDate) return;
    
    const newEntry = {
      id: Date.now(),
      startDate: new Date(startDate).toLocaleDateString('id-ID'),
      endDate: new Date(endDate).toLocaleDateString('id-ID'),
      duration,
      businessDays,
      timestamp: new Date().toISOString()
    };
    
    setHistory(prev => [newEntry, ...prev.slice(0, 9)]); // Keep only last 10 entries
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('dayCounterHistory');
  };

  return {
    history,
    addToHistory,
    clearHistory,
    showHistory,
    setShowHistory
  };
};

export default HistoryPanel;