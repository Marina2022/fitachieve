'use client'

import TimeSquare from "./TimeSquare";
import {useEffect, useState} from "react";
import {User} from "@/types";

const SquareBlock = ({plannedTime, squareArray, workedSquares, timeChunk, themeName}: {
    plannedTime: Number,
    squareArray: Number[],
    workedSquares: number,
    timeChunk: number,
    themeName: string
}) => {

    const [user, setUser] = useState({} as User)

    useEffect(() => {
            const getUser = async () => {
                let user: User = {}
                try {
                    const resp = await fetch('/api/user')
                    if (!resp.ok) throw new Error('user not fetched')
                    user = await resp.json()
                    setUser(user)
                } catch (err) {
                    console.log(err)
                    throw new Error('fuck')
                }
            }
            getUser()
        }, []
    )
    
    if(!user.themes) return <div className='w-[250px] gap-5 mt-[20px] h-[70px]'>Loading...</div>
    
    return (
        <div className="wrapper grid grid-cols-3 grid-rows-auto w-[250px]  gap-5 mt-[20px] cursor-pointer ">
            {
                squareArray.map((item, i) => <TimeSquare 
                    key={i} 
                    emptyProp={i + 1 > Number(workedSquares)}                    
                    workedSquares={workedSquares}
                    timeChunk={timeChunk}
                    themeName={themeName}
                    user={user}
                />)
            }
        </div>
    );
};

export default SquareBlock;