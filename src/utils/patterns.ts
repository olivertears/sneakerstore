import {cardImages} from "../dataStorage/images/Card";

export const paymentSystemPattern = (number: string): string => {
    if(number.startsWith('4')) return cardImages.visa
    if (['51', '52', '53', '54', '55'].includes(number.substring(0, 2))) return cardImages.mastercard
    return ''
}

export const numberPattern = (number: string): string => {
    let str: string = ''

    for(let i:number = 0; i < 16; i++) {
        i > 0 && i % 4 === 0 ? str += ' ' : str += ''
        number[i] ? str += number[i] : str += 'X'
    }

    return str
}

export const ownerPattern = (owner: string): string => {
    return owner.replace(/  +/g, ' ').trim().toUpperCase()
}

export const monthPattern = (month: string): string => {
    let str: string = '00'

    for(let i:number = 0; i < 2; i++) {
        month[i] ? str += month[i] : str += ''
    }

    if (Number(month) > 12) return '12'

    return str.slice(-2)
}

export const yearPattern = (year: string): string => {
    let str: string = '00'

    for(let i:number = 0; i < 2; i++) {
        year[i] ? str += year[i] : str += ''
    }

    return str.slice(-2)
}