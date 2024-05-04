'use client'

import TimeSquare from "./TimeSquare";
import {useState} from "react";

const SquareBlock = ({plannedTime, squareArray, workedSquares, timeChunk, themeName}: {
    plannedTime: Number,
    squareArray: Number[],
    workedSquares: number,
    timeChunk: number,
    themeName: string
}) => {
    
    return (
        <div className="wrapper grid grid-cols-3 grid-rows-auto w-[250px] gap-5 mt-[20px] cursor-pointer ">
            {
                squareArray.map((item, i) => <TimeSquare 
                    key={i} 
                    emptyProp={i + 1 > Number(workedSquares)}                    
                    workedSquares={workedSquares}
                    timeChunk={timeChunk}
                    themeName={themeName}                    
                />)
            }
        </div>
    );
};

export default SquareBlock;