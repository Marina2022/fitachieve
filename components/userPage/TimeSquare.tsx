'use client'

import clsx from 'clsx'

import {User} from '@/types'
import {useRouter} from "next/navigation";
import {updateUser} from "@/actions";


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
            await updateUser(user)            
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
            return
        }            
          
        const myTheme = user.themes.find(theme => theme.themeName === themeName)
        const workouts = myTheme?.workouts

        if (!workouts) {
            console.log('Теперь не подгрузились workouts')
            return
        }

        const myItem = workouts.find((item: any) => {
            if (new Date(item.date).getDate() === new Date().getDate()) console.log(item.date)
            return new Date(item.date).getDate() === new Date().getDate() && new Date(item.date).getFullYear() === new Date().getFullYear() && new Date(item.date).getMonth() === new Date().getMonth()
        })

        console.log('на всякий случай вот тебе myItem = ', myItem)
        console.log('А вот сегодняшняя дата: ',  new Date().getDate())
        
        // "2024-06-26T21:27:48.723Z" = 20:08 27.06 - Вот как-то таак. 

        
        // если воркауты сегодня были:
        if (myItem) {            
            // если кликнули по пустому квадрату
            if (emptyProp) {
                // новое значение объекта workout (элемента массива workouts - карточки воркаута)
                myItem.workedMinutes = (workedSquares + 1) * timeChunk
                const resp = await sendEditWorkoutRequest(user)

                console.log('воркауты были, updated user = ', user)

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
            console.log('воркаутов не было , updated user = ', user)
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