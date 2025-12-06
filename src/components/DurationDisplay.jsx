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

    const duration = calculateDuration(startDate, endDate);

    return (
        <div className="w-[80%] text-lg font-semibold text-white bg-gray-800 p-2 rounded-md inline-block">
            Durasi: {duration}
        </div>
    );
};

export default DurationDisplay;