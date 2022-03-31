//@ts-ignore
import addCard from './addCard.png'
//@ts-ignore
import cardWrap from './cardWrap.png'
//@ts-ignore
import mastercard from './mastercard.png'
//@ts-ignore
import visa from './visa.png'
//@ts-ignore
import deleteBtn from './deleteBtn.png'

interface ICardImages {
    addCard: string,
    cardWrap: string,
    mastercard: string,
    visa: string,
    deleteBtn: string
}

export const cardImages: ICardImages = {
    addCard: addCard,
    cardWrap: cardWrap,
    mastercard: mastercard,
    visa: visa,
    deleteBtn: deleteBtn
}