const PlanRange = ({workouts}: {workouts: any[]}) => {

    // норма = 15 * 7
    // нужно посчитать с пн до вс - сколько дней попало, и сложить отработанные минуты
    // прикольно, кстати, дааа? откуда отсчитывать время? можно с первого захода.. да и все. 
    // а давай, пофиг на пн.. т.е. че? находим самый ранний айтем, смотрим его дату, делим на 7, получаем - сколько дней прошло от недели

    // и проверяем данные по всем датам, которые под эти дни подходят (которые больше, чем "сегодня" - вот этот остаток от деления.. Как-то так


    return (
        <div className="h-[25px] border-amber-300 bg-amber-50 mb-[30px] rounded-md relative">
            <div className="rounded-md t-0 l-0 h-[100%] bg-amber-400 w-[50%]"></div>            
        </div>
    );
};

export default PlanRange;