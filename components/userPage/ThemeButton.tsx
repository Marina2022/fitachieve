'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import clsx from "clsx";
const ThemeButton = ({themeName}: { themeName: string }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();           
    const clickHandler = async () =>{
        const params = new URLSearchParams(searchParams);
        params.set('theme', themeName);
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <li onClick={clickHandler}
            className={clsx("bg-amber-200 border-2 border-amber-200 rounded-md mb-4 w-full py-2 px-4 text-amber-900 cursor-pointer",
                {"border-2 !border-amber-400":  (themeName === searchParams.get('theme')) || (!searchParams.get('theme') && themeName === 'Fitness' ) } 
            )}>
            {themeName}
        </li>
    );
};

export default ThemeButton;