import clsx from "clsx";

const DayCard = ({day, timeChunk, planPerDay}: { day: any, planPerDay: number, timeChunk: number }) => {

    console.log('day', day)

    const currentDate = new Date(day.date)
    const options = {year: 'numeric', month: 'long', day: '2-digit'}; // Опции для форматирования
    const formattedDate: string = currentDate.toLocaleDateString(undefined, options as Intl.DateTimeFormatOptions);
    const miniSquares = day.workedMinutes / timeChunk
    const array = Array.from({length: miniSquares}, () => '1')
    
    let emptyArray = [] as string[]
    const plannedSquaresNumber = planPerDay/timeChunk
    
    // if (miniSquares === 0) {
        emptyArray = Array.from({length: plannedSquaresNumber}, () => '1')
    // } 

    
    return (
        <div className='border-amber-300 border p-5 rounded-md min-h-[95px]'>
            <div>{formattedDate}</div>

            {
                miniSquares >= plannedSquaresNumber ?
                    (
                        <div className="flex gap-3 mt-2 flex-wrap">
                            {
                                array.map((item, i) => <div
                                    key={i}
                                    className={`h-5 w-5 bg-amber-200 rounded-md ${plannedSquaresNumber > i ? "border-2 border-amber-600" : ''} `}></div>)
                            }
                        </div>
                    )
                    : (
                        <div className="flex gap-3 mt-2 flex-wrap">
                            {
                                emptyArray.map((item, i) => <div key={i}
                                                                 className={clsx(
                                                                     "h-5 w-5 rounded-md border border-amber-300 shrink-0",
                                                                     {"bg-amber-200": miniSquares > i},
                                                                     {"border border-amber-400 rounded-md": miniSquares <= i}
                                                                 )}>
                                </div>)
                            }
                        </div>
                    )
            }
           
           
        </div>
    );
};

export default DayCard;