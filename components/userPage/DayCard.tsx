const DayCard = ({day}: { day: any }) => {
    
    // хочется пустые квадратики добавить для тех дней, где недобор.. Та нее, лучше знаешь че?
    // попробуй вот этот range сделать квадратами: 21 квадрат всего-то.. Если слишком много будет, то в ряды разнесешь, фигня
    // как-нить подсвечивать просроченные квадраты. да да. Прикона, ващеее.. 
    // что будет, кстати, за недобор?? разрузочный день? пройти 100км? ахах, смотря где. Все-таки куда мы эту ачивку засунем.. 
    // я думаю, это будет такая основа основ. Потом к ней можно прилепить фитнес, можно изучение чего-нибудь, почему нет-то.. 
    // можно работу над проектом, // приборку по Флай-леди, прикона же! да да!!!
    
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