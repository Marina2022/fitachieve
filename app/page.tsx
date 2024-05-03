import Image from "next/image";
import FiveMinSquare from "@/components/userPage/FiveMinSquare";
import connectDB from "@/database";
import User from "@/models/User";
import SquareBlock from "@/components/userPage/SquareBlock";

// подтягиваем по токену текущего юзера из базы данных - сколько минут у него в планах заниматься

const plannedTime = 15
const squareQuantity = 15/5

const squareArray = Array.from ({length: squareQuantity}, (i:Number)=>1)

// id = 6634a5cb9ec5d549ac393bd2
// а также сколько квадратов он уже сегодня закрасил

export default async function Home() {
    
    connectDB()
    const user = await User.findById('6634a5cb9ec5d549ac393bd2')

    const item = user.workouts.find((item: any)=> {
        return item.date.toDateString() == new Date().toDateString()       
    })

    const workedSquares = item.workedMinutes/5
    
    
    return (
        <main className="p-24">
            <h1 className="font-bold">
                Достижения на сегодня - {new Date().toLocaleDateString()}
            </h1>            
        
            <SquareBlock plannedTime={plannedTime} squareArray={squareArray} workedSquares={workedSquares} />
       
        </main>
    );
}
