'use client'

import clsx from 'clsx'
import {useState} from "react";
import {useRouter} from "next/navigation";


const FiveMinSquare = ({emptyProp, setWorkedSquaresLocal, workedSquares}: {emptyProp: boolean, setWorkedSquaresLocal: (val: any)=>void, workedSquares: number}) => {
  
  const router = useRouter()
  

  const squareClickHandle = async () => {

    let user
    try {
      const resp = await fetch('/api/user')
      if (!resp.ok) throw new Error('aaa')
      user = await resp.json()
    } catch (err) {
      console.log(err)
    }
       


    const myItem = user.workouts.find((item:any) => {
      return new Date(item.date).getDate() === new Date().getDate()
    })

    if (emptyProp) {
      myItem.workedMinutes = myItem.workedMinutes + 5
      setWorkedSquaresLocal((prev:number) => prev + 1)
    } else {
      myItem.workedMinutes = myItem.workedMinutes - 5
      setWorkedSquaresLocal((prev:number) => prev - 1)
    }
    // c датами какая-то фигня, скажи? аха

    try {
      const resp = await fetch('/api/user', {method: 'PUT', body: JSON.stringify({user: user})})
      if (!resp.ok) throw new Error('POST error')
    } catch (err) {
      console.log('Ошибка во время поста')
    }
    finally {
      // router.refresh()
    }
  }
  // noinspection JSAnnotator
  return (
      <div className={clsx(
          'border border-amber-300 rounded-md flex items-center justify-center h-[70px]', {'bg-amber-100': emptyProp !== true}
      )}
           onClick={squareClickHandle}>
        5 мин
      </div>
  );
};

export default FiveMinSquare;