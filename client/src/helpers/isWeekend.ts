
export const isWeekend= () : boolean => {
    const today : number = new Date().getDay()
    const weekends : Set<number> = new Set([0, 5, 6])

    return weekends.has(today)
}