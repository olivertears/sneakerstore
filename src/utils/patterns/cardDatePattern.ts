export const cardMonthPattern = (month: string): string => {
    let str: string = '00'

    for(let i:number = 0; i < 2; i++) {
        month[i] ? str += month[i] : str += ''
    }

    if (Number(month) > 12) return '12'

    return str.slice(-2)
}

export const cardYearPattern = (year: string): string => {
    let str: string = '00'

    for(let i:number = 0; i < 2; i++) {
        year[i] ? str += year[i] : str += ''
    }

    return str.slice(-2)
}