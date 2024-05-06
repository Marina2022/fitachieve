import connectDB from "@/database";
import User from "@/models/User";
import ThemeButton from '@/components/userPage/ThemeButton'

const SideBar = async ({searchParams}: { searchParams?: any }) => {

    const theme = searchParams?.theme
    connectDB()
    let themeToWork
    const user = await User.findById('6634e7d79ec5d549ac393bd6')
    const allThemes = [...user.themes]
    
    return (
        
        <ul className="w-1/5 mr-[50px] max-md:hidden">
            {                 
                 allThemes.map((theme, i) =>  <ThemeButton themeName={theme.themeName}  key={i} />)
            }

        </ul>
    );
};

export default SideBar;