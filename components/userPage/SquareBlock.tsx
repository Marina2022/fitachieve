'use client'

import FiveMinSquare from "./FiveMinSquare";
import {useState} from "react";

const SquareBlock = ({plannedTime, squareArray, workedSquares}: {
    plannedTime: Number,
    squareArray: Number[],
    workedSquares: number
}) => {

    const [workedSquaresLocal, setWorkedSquaresLocal] = useState(workedSquares)
    
    if (workedSquaresLocal === squareArray.length) squareArray.push(1)
    
    return (
        <div className="wrapper grid grid-cols-3 grid-rows-auto w-[250px] gap-5 mt-[20px] cursor-pointer ">
            {
                squareArray.map((item, i) => <FiveMinSquare 
                    key={i} 
                    emptyProp={i + 1 > Number(workedSquaresLocal)}
                    setWorkedSquaresLocal={setWorkedSquaresLocal}
                    workedSquares={workedSquares}
                />)
            }

        </div>
    );
};

export default SquareBlock;