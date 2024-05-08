const PlanRange = ({minSquareQuantity, workedSquares}: {minSquareQuantity:number, workedSquares:number}) => {
    
    
    let fulfilledPercent 
    
    if (workedSquares <= minSquareQuantity) {
        fulfilledPercent =  Math.trunc(workedSquares / minSquareQuantity * 100)  
    } else {
        fulfilledPercent = 100
    }
    
    return (
        <div className="h-[25px] border-amber-300 bg-amber-50 mb-[30px] rounded-md relative max-md:mb-[20px]">
            <div style={{width: `${fulfilledPercent}%`}} className="rounded-md t-0 l-0 h-[100%] bg-amber-300"></div>           
            
        </div>
    );
};

export default PlanRange;