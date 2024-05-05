'use server'

import connectDB from "@/database";
import User from "@/models/User";
import {Theme, User as UserType} from '@/types'
import {revalidatePath} from 'next/cache'

export async function put(user: UserType) {
    await connectDB()
    await User.findOneAndUpdate({_id: '6634e7d79ec5d549ac393bd6'}, {themes: user.themes})
    revalidatePath('/')
}

export async function getNotes(theme: string) {
    const user = await User.findById('6634e7d79ec5d549ac393bd6')

    const myTheme = user.themes.find((item: any) => {
        return item.themeName.toLowerCase() === theme.toLowerCase()
    })
    return myTheme?.notes
}

export async function setMyNotes(theme: string, text: string) {
    const user = await User.findById('6634e7d79ec5d549ac393bd6')

    const myTheme = user.themes.find((item: any) => {
        return item.themeName.toLowerCase() === theme.toLowerCase()
    })
    myTheme.notes = text
    await put(user)    
}