import {ISize} from "./ISize";

export interface IProduct {
    id: string,
    price: number,
    sex: string,
    brand: string,
    name: string,
    destiny: string,
    season: string, // [summer, winter, demi-season, multi-season]
    color: string,
    originCountry: string,
    material: string, // [suede, leather, textile, polymer, other materials]
    description: string,

    averageRate: number,
    orderAmount: number,
    photos: string,

    size: string, // [{size: number, amount: number}]
}
