import {cardImages} from "../../dataStorage/images/Card";

export const cardPaymentSystemPattern = (number: string): string => {
    if(number.startsWith('4')) return cardImages.visa
    if (['51', '52', '53', '54', '55'].includes(number.substring(0, 2))) return cardImages.mastercard
    return ''
}