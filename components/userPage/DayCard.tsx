const DayCard = ({day}: { day: any }) => {
    
    const currentDate = new Date(day.date)
    const options = {year: 'numeric', month: 'long', day: '2-digit'}; // Опции для форматирования
    const formattedDate: string = currentDate.toLocaleDateString(undefined, options as Intl.DateTimeFormatOptions);
    const miniSquares = day.workedMinutes / 5
    const array = Array.from({length: miniSquares}, () => '1')

    return (
        <div className='border-amber-300 border p-5 rounded-md min-h-[95px]'>
            <div>{formattedDate}</div>
            <div className="flex gap-3 mt-2">
                {
                    array.map((item, i) => <div key={i} className="h-5 w-5 bg-amber-400 rounded-md"></div>)
                }
            </div>
        </div>
    );
};

export default DayCard;