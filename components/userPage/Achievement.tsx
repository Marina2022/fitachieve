import PlanRange from "@/components/userPage/PlanRange";
import SquareBlock from "@/components/userPage/SquareBlock";
import connectDB from "@/database";
import User from "@/models/User";

const Achievement = async ({themeToWork}:{themeToWork: any}) => {    
    connectDB()
    const user = await User.findById('6634e7d79ec5d549ac393bd6')    
    const item = themeToWork.workouts.find((item: any) => {
        return item.date.toDateString() == new Date().toDateString()
    })

    let workedSquares
    
    if (item ){
        workedSquares = item.workedMinutes / themeToWork.timeChunk    
    } else {
        workedSquares = 0
    }        
    const plannedTime = themeToWork.planPerDay  
    const minSquareQuantity = plannedTime / themeToWork.timeChunk
    const squareQuantity = minSquareQuantity > (workedSquares + 1) ? minSquareQuantity : workedSquares + 1
    const squareArray = Array.from({length: squareQuantity}, (i: Number) => 1)
    
    return (
        <div>
            {/*<PlanRange workouts={user.workouts}/>*/}
            <h1 className="font-bold text-2xl text-red-500 mb-[20px]">{user.name}</h1>
            <h2 className="font-bold">
                Достижения на сегодня - {new Date().toLocaleDateString()}
            </h2>

            <h3 className="font-bold mt-6 text-3xl">{themeToWork.themeName}:</h3>

            <SquareBlock 
                plannedTime={plannedTime} 
                squareArray={squareArray} 
                workedSquares={workedSquares} 
                timeChunk={themeToWork.timeChunk}
                themeName={themeToWork.themeName}
                key={themeToWork.themeName}            
            />
        </div>
    );
};

export default Achievement;