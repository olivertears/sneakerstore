// @ts-ignore
import cart from './cart.png'
// @ts-ignore
import favourites from "./favourites.png";
// @ts-ignore
import orders from "./orders.png";
// @ts-ignore
import personalData from './personalData.png'

interface IProfileImages {
    cart: string,
    favourites: string,
    orders: string,
    personalData: string,
}

export const profileImages: IProfileImages = {
    cart: cart,
    favourites: favourites,
    orders: orders,
    personalData: personalData,
}