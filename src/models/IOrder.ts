export interface IOrder {
    id: string,
    date: string,
    status: string // [processing, delivery, completed]
    customerEmail: string,
    payment: string, //способ оплаты (наличкой при получении, по карте, в рассрочку)

    sizesIds: string[]
}