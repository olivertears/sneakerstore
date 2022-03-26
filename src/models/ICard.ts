export interface ICard {
    id: string,
    number: string,
    validityDate: string,
    owner: string,
    cvv: string,

    customersIds?: string[]
}

