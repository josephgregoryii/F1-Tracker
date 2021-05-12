
export const shortenName = (name: string) : string => {
    const last_first: string[] = name.split(' ')
    const last: string = last_first[1]

    // Schumacher has a unique name due to his father's legacy
    if (last === "Schumacher") {
        return "MSC"
    }

    return last.substring(0,3).toUpperCase()
}