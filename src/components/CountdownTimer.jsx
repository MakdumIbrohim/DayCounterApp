import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CountdownTimer = ({ isDarkMode }) => {
    const [targetDate, setTargetDate] = useState(null);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        if (!targetDate) return;

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = new Date(targetDate).getTime() - now;

            if (distance < 0) {
                clearInterval(timer);
                setIsExpired(true);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setIsExpired(false);
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const inputClassName = `border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${isDarkMode
            ? "bg-gray-700 border-gray-600 text-white"
            : "bg-white text-gray-900"
        }`;

    const labelClassName = `mb-2 font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"
        }`;

    const timeBoxClassName = `flex flex-col items-center justify-center p-3 rounded-lg min-w-[70px] ${isDarkMode ? "bg-gray-700 text-white" : "bg-blue-50 text-blue-900"
        }`;

    const timeLabelClassName = `text-xs uppercase mt-1 ${isDarkMode ? "text-gray-400" : "text-blue-600"
        }`;

    return (
        <div className="w-full max-w-lg p-6">
            <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Hitung Mundur</h3>

            <div className="flex flex-col w-full max-w-xs mx-auto mb-8">
                <label className={labelClassName}>Target Waktu</label>
                <DatePicker
                    selected={targetDate}
                    onChange={(date) => setTargetDate(date)}
                    showTimeSelect
                    dateFormat="dd/MM/yyyy HH:mm"
                    timeFormat="HH:mm"
                    placeholderText="Pilih waktu target"
                    className={inputClassName}
                />
            </div>

            {targetDate && (
                <div className="flex flex-col items-center animate-fade-in">
                    {isExpired ? (
                        <div className={`text-xl font-bold p-4 rounded-lg w-full text-center ${isDarkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-600'}`}>
                            Waktu telah habis!
                        </div>
                    ) : (
                        <div className="grid grid-cols-4 gap-3 w-full">
                            <div className={timeBoxClassName}>
                                <span className="text-2xl font-bold">{timeLeft.days}</span>
                                <span className={timeLabelClassName}>Hari</span>
                            </div>
                            <div className={timeBoxClassName}>
                                <span className="text-2xl font-bold">{timeLeft.hours}</span>
                                <span className={timeLabelClassName}>Jam</span>
                            </div>
                            <div className={timeBoxClassName}>
                                <span className="text-2xl font-bold">{timeLeft.minutes}</span>
                                <span className={timeLabelClassName}>Menit</span>
                            </div>
                            <div className={timeBoxClassName}>
                                <span className="text-2xl font-bold">{timeLeft.seconds}</span>
                                <span className={timeLabelClassName}>Detik</span>
                            </div>
                        </div>
                    )}

                    <div className={`mt-6 text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Menuju: {targetDate.toLocaleString('id-ID')}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CountdownTimer;
