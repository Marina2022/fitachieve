'use client'
import FiveMinSquare from "./FiveMinSquare";

const SquareBlock = ({plannedTime, squareArray, workedSquares}: {
    plannedTime: Number,
    squareArray: Number[],
    workedSquares: Number
}) => {

    console.log('squareArray = ', squareArray)
    return (
        <div className="wrapper grid grid-cols-3 grid-rows-1 w-[250px] h-[70px] gap-5 mt-[20px]">
            {
                squareArray.map((item, i) => <FiveMinSquare key={i} emptyProp={i + 1 > Number(workedSquares)}/>)
            }

        </div>
    );
};

export default SquareBlock;