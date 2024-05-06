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

    const myWorkouts = [...themeToWork.workouts].reverse()
    
    return (
        <main className="pt-24 container mx-auto  max-md:px-[20px] max-md:pt-10">
            <div className="flex w-full max-md:justify-center">
                <SideBar/>
                <div>
                    <Achievement themeToWork={themeToWork}/>
                    
                    <Notes key={searchParams.theme} />
                    {/*<Notes notesUser={user}  />*/}

                </div>

                <aside className="w-1/4 ml-auto space-y-5 asideClass max-md:hidden ">
                    {                        
                        myWorkouts.map((day: any, i: number) => 
                            <DayCard key={i} day={day} timeChunk={themeToWork.timeChunk} planPerDay={themeToWork.planPerDay} />)
                    }
                </aside>
            </div>
        </main>
    );
}
