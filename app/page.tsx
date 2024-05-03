import Image from "next/image";
import FiveMinSquare from "@/components/userPage/FiveMinSquare";
import connectDB from "@/database";
import User from "@/models/User";
import SquareBlock from "@/components/userPage/SquareBlock";
import DayCard from "@/components/userPage/DayCard"
import PlanRange from "@/components/userPage/PlanRange"
import Achievement from "@/components/userPage/Achievement"

// по идее можно че: добавить название Ачивки, запланированное время, можно еще размер блока со временем, может людям 5мин мало

// даа, - выпадающий список со своими областями. Выбираешь че надо, серчПарамс ставится какой-нить и идет перефетч..
// по умолчанию серчПарамсы тоже читаем и ставим в самый первый из возможных
// потом по серчПарамсу собственно выбираем, че рендерить будем. Ибо юзера мы целиком же вытянули

// ниче сложного так-то
// можно отд. страницу со всеми достижениями, все дела. 


export default async function Home() {

    connectDB()
    const user = await User.findById('6634a5cb9ec5d549ac393bd2')

    return (
        <main className="p-24">
            <div className="flex w-full">
                <Achievement/>
                <aside className="w-1/4 ml-auto space-y-5">
                    {
                        user.workouts.map((day: any, i: number) => i !== 0 &&
                            <DayCard key={i} day={day}/>)
                    }
                </aside>
            </div>
        </main>
    );
}
