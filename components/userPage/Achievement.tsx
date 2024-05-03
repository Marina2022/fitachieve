import React from 'react';
import PlanRange from "@/components/userPage/PlanRange";
import SquareBlock from "@/components/userPage/SquareBlock";
import connectDB from "@/database";
import User from "@/models/User";

const Achievement = async () => {

    connectDB()
    const user = await User.findById('6634a5cb9ec5d549ac393bd2')

    const item = user.workouts.find((item: any) => {
        return item.date.toDateString() == new Date().toDateString()
    })

    const workedSquares = item.workedMinutes / 5


    const plannedTime = 15  // подтянули из базы
    const minSquareQuantity = 15 / 5

    const squareQuantity = minSquareQuantity > (workedSquares + 1) ? minSquareQuantity : workedSquares + 1

    const squareArray = Array.from({length: squareQuantity}, (i: Number) => 1)

    
    return (
        <div>
            <PlanRange workouts={user.workouts}/>
            <h1 className="font-bold text-2xl text-red-500 mb-[20px]">{user.name}</h1>
            <h2 className="font-bold">
                Достижения на сегодня - {new Date().toLocaleDateString()}
            </h2>

            <h3 className="font-bold mt-6 text-indigo-700">Тренировки</h3>

            <SquareBlock plannedTime={plannedTime} squareArray={squareArray} workedSquares={workedSquares}/>
        </div>
    );
};

export default Achievement;