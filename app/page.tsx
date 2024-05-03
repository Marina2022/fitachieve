import Image from "next/image";
import FiveMinSquare from "@/components/userPage/FiveMinSquare";
import connectDB from "@/database";
import User from "@/models/User";
import SquareBlock from "@/components/userPage/SquareBlock";
import DayCard from "@/components/userPage/DayCard"
import PlanRange from "@/components/userPage/PlanRange"
import Achievement from "@/components/userPage/Achievement"
import SideBar from "@/components/userPage/SideBar"

// по идее можно че: добавить название Ачивки, запланированное время, можно еще размер блока со временем, может людям 5мин мало

// даа, - выпадающий список со своими областями. Выбираешь че надо, серчПарамс ставится какой-нить и идет перефетч..
// по умолчанию серчПарамсы тоже читаем и ставим в самый первый из возможных
// потом по серчПарамсу собственно выбираем, че рендерить будем. Ибо юзера мы целиком же вытянули

// ниче сложного так-то
// можно отд. страницу со всеми достижениями, все дела. 

export default async function Home({searchParams}: { searchParams: any }) {
    const theme = searchParams?.theme

    console.log('theme', theme)
    connectDB()

    let themeToWork
    const user = await User.findById('6634e7d79ec5d549ac393bd6')

    const allThemes = [...user.themes]

    themeToWork = allThemes.find((item: any) => {
        console.log('item.themeName.toLowerCase()', item.themeName.toLowerCase())
        console.log('theme ======', theme)
        
        return item.themeName.toLowerCase() === theme.toLowerCase()
    })

    if (!themeToWork) themeToWork = allThemes[0]
    console.log('themeToWork =====', themeToWork)


    return (
        <main className="pt-24 container mx-auto">
            <div className="flex w-full">
                <SideBar/>
                <Achievement themeToWork={themeToWork} />

                <aside className="w-1/5 ml-auto space-y-5">
                    {
                        themeToWork.workouts.map((day: any, i: number) => i !== 0 &&
                            <DayCard key={i} day={day}/>)
                    }
                </aside>
            </div>
        </main>
    );
}
