export const setNicePrice = (price: number): number => {
    let p = price.toString().split('.')[0]
    let finalPrice = p.slice(0, p.length - 1)
    p.slice(-1) > '4' ? finalPrice += '9.99' : finalPrice += '4.99'

    return Number(finalPrice)
}

export const returnPrice = (price: number): number => {
    return setNicePrice(price - 5)
}