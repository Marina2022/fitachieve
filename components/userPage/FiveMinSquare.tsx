'use client'

import clsx from 'clsx'
import {useState} from "react";


const FiveMinSquare = ({emptyProp}: {emptyProp: boolean}) => {
  
  const [empty, setEmpty] = useState(emptyProp)

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

    if (empty) {
      myItem.workedMinutes = myItem.workedMinutes + 5
      setEmpty(false)
    } else {
      myItem.workedMinutes = myItem.workedMinutes - 5
      setEmpty(true)
    }
    // c датами какая-то фигня, скажи? аха

    try {
      const resp = await fetch('/api/user', {method: 'PUT', body: JSON.stringify({user: user})})
      if (!resp.ok) throw new Error('POST error')
    } catch (err) {
      console.log('Ошибка во время поста')
    }
  }
  // noinspection JSAnnotator
  return (
      <div className={clsx(
          'border border-amber-300 rounded-md flex items-center justify-center', {'bg-amber-100': empty !== true}
      )}
           onClick={squareClickHandle}>
        5 мин
      </div>
  );
};

export default FiveMinSquare;