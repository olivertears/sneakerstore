export interface IOrder {
    id: string,
    customerEmail: string,
    amount: number,
    date: string,
    status: string // [processing, delivery, completed]
    productId: string,
    payment: string, //способ оплаты (наличкой при получении, по карте, в рассрочку)
}