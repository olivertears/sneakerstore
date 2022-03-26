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
    description?: string,
    averageRate?: number,

    photosIds?: string[],
    sizesIds?: string[],
    commentsIds?: string[],
    customersIds?: string[],

    orderedAmount: number, //Вадя забыл добавить, потом добавит
}
