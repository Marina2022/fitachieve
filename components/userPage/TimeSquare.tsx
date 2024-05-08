'use client'

import clsx from 'clsx'
import {useEffect, useState} from "react";

import {User} from '@/types'
import {useParams, useRouter} from "next/navigation";
import {put} from "@/actions";

const TimeSquare = ({emptyProp, workedSquares, timeChunk, themeName, user}:
                        {
                            emptyProp: boolean,
                            workedSquares: number,
                            timeChunk: number,
                            themeName: string,
                            user: User

                        }) => {

    
    const sendEditWorkoutRequest = async (user: User) => {        
        try {
            await put(user)            
            return {ok: true}
        } catch (err) {
            console.log('Ошибка во время поста')
            return {ok: false}
        }
    }

    const router = useRouter()
    const squareClickHandle = async () => {
        console.log('вижу клик')
                       
        if (!user.themes) {
            console.log('Еще не подгрузился юзер')
            console.log('user=', user)
            return
        }            
          
        const myTheme = user.themes.find(theme => theme.themeName === themeName)
        const workouts = myTheme?.workouts

        if (!workouts) {
            console.log('Теперь не подгрузились workouts')
            return
        }
        

        const myItem = workouts.find((item: any) => {
            return new Date(item.date).getDate() === new Date().getDate()
        })

        // если воркауты сегодня были:
        if (myItem) {
            // если кликнули по пустому квадрату
            if (emptyProp) {
                // новое значение объекта workout (элемента массива workouts - карточки воркаута)
                myItem.workedMinutes = (workedSquares + 1) * timeChunk
                const resp = await sendEditWorkoutRequest(user)

            } else {
                myItem.workedMinutes = (workedSquares - 1) * timeChunk
                const resp = await sendEditWorkoutRequest(user)
            }
        } else {

            const newItem = {
                date: new Date(),
                workedMinutes: timeChunk
            }
            workouts.push(newItem)
            sendEditWorkoutRequest(user)
        }
    }
    
    return (
        user.themes && <div className={clsx(
            'active:shadow-md border border-amber-300 rounded-md flex items-center justify-center h-[70px] select-none', {'bg-amber-100': emptyProp !== true}
        )}
             onClick={squareClickHandle}>
            {timeChunk} мин
        </div>
    );
};

export default TimeSquare;