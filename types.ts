export type User = {
    name?: string,
    email?: string,
    themes?: Theme[]
}


export type Theme = {
    themeName: string,
    planPerDay: number,
    timeChunk: number,
    workouts: [
        {
            date: Date,
            workedMinutes: number
        }
    ]
} 


