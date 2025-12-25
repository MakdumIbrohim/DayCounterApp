import HistoryPanel from './HistoryPanel';

const DurationDisplay = ({ startDate, endDate }) => {
    const calculateDuration = (start, end) => {
        if (!start || !end) return 'Pilih tanggal untuk menghitung durasi';
        const startDt = new Date(start);
        const endDt = new Date(end);
        const diffInMs = endDt - startDt;
        if (diffInMs < 0) return 'Tanggal akhir harus setelah tanggal awal';
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const years = Math.floor(diffInDays / 365);
        const months = Math.floor((diffInDays % 365) / 30);
        const days = diffInDays % 30;

        let result = [];
        if (years > 0) result.push(`${years} tahun`);
        if (months > 0) result.push(`${months} bulan`);
        if (days > 0 || result.length === 0) result.push(`${days} hari`);

        return result.join(', ');
    };
    
    const calculateBusinessDays = (start, end) => {
        if (!start || !end) return 'Pilih tanggal untuk menghitung hari kerja';
        const startDt = new Date(start);
        const endDt = new Date(end);
        
        if (endDt < startDt) return 'Tanggal akhir harus setelah tanggal awal';
        
        let businessDays = 0;
        const currentDate = new Date(startDt);
        
        while (currentDate <= endDt) {
            const dayOfWeek = currentDate.getDay();
            // 0 = Minggu, 6 = Sabtu
            if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                businessDays++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        
        return `${businessDays} hari kerja`;
    };

    const { addToHistory } = HistoryPanel();
    
    const duration = calculateDuration(startDate, endDate);
    const businessDays = calculateBusinessDays(startDate, endDate);
    
    // Add to history when dates change
    if (startDate && endDate) {
        addToHistory(startDate, endDate, duration, businessDays);
    }

    return (
        <div className="w-full">
            <div className="text-lg font-semibold bg-gray-100 dark:bg-gray-700 p-3 rounded-md mb-2">
                Durasi: {duration}
            </div>
            <div className="text-lg font-semibold bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                Hari Kerja: {businessDays}
            </div>
        </div>
    );
};

export default DurationDisplay;