'use server'

import connectDB from "@/database";
import User from "@/models/User";
import {User as UserType} from '@/types'
import { revalidatePath } from 'next/cache' 

export async function put(user: UserType) {
    await connectDB()
    await User.findOneAndUpdate({_id: '6634e7d79ec5d549ac393bd6'}, {themes: user.themes})    
    revalidatePath('/')
}