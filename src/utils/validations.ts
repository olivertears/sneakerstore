import {ICard} from "../models/ICard";

export const cardValidation = (card: ICard): boolean => {
    const dateNow = Date.now()
    const cardDate: number = card.validityDate.slice(0,2) === '12' ?
        Date.parse(`20${Number(card.validityDate.slice(-2)) + 1}-01`) :
        Date.parse(`20${card.validityDate.slice(-2)}-${Number(card.validityDate.slice(0, 2)) + 1}`)

    return cardDate > dateNow
}