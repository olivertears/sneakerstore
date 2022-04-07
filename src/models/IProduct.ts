export interface IProduct {
    id: string,
    price: number,
    sex: string,
    brand: string,
    name: string,
    destiny: string,
    season: string,
    color: string,
    originCountry: string,
    material: string, // [suede, leather, textile, polymer, other materials]
    description?: string,

    orderedAmount: number, //Вадя забыл добавить, потом добавит
    averageRate: number,

    photosIds: string[],
    sizesIds: string[],
    commentsIds?: string[],
}
