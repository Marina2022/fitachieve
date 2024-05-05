import Image from "next/image";
import TimeSquare from "@/components/userPage/TimeSquare";
import connectDB from "@/database";
import User from "@/models/User";
import SquareBlock from "@/components/userPage/SquareBlock";
import DayCard from "@/components/userPage/DayCard"
import PlanRange from "@/components/userPage/PlanRange"
import Achievement from "@/components/userPage/Achievement"
import SideBar from "@/components/userPage/SideBar"
import Notes from "@/components/userPage/Notes";

export const generateMetadata = async ({searchParams}: { searchParams: any }) => {
    return {
        title: searchParams?.theme
    }
}

export default async function Home({searchParams}: { searchParams: any }) {
    const theme = searchParams?.theme
    connectDB()

    let themeToWork
    const user = await User.findById('6634e7d79ec5d549ac393bd6')

    const allThemes = [...user.themes]
    if (!allThemes) return

    if (!theme) {
        themeToWork = allThemes[0]
    } else {
        themeToWork = allThemes.find((item: any) => {
            return item.themeName.toLowerCase() === theme.toLowerCase()
        })
    }

    if (!themeToWork) themeToWork = allThemes[0]

    return (
        <main className="pt-24 container mx-auto">
            <div className="flex w-full">
                <SideBar/>
                <div>
                    <Achievement themeToWork={themeToWork}/>
                    
                    <Notes key={searchParams.theme} />
                    {/*<Notes notesUser={user}  />*/}

                </div>

                <aside className="w-1/5 ml-auto space-y-5">
                    {
                        themeToWork.workouts.map((day: any, i: number) => new Date(day.date).toDateString() !== new Date().toDateString() &&
                            <DayCard key={i} day={day}/>)
                    }
                </aside>
            </div>
        </main>
    );
}
