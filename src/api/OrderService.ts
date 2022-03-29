import {ILogin} from "../models/ILogin";
import axios, {AxiosResponse} from "axios";
import {IOrder} from "../models/IOrder";

export default class OrderService {
    static async getOrders(customerId: string, loginData: ILogin): Promise<AxiosResponse<IOrder[]>> {
        return axios.get(`https://apisneakerstore.herokuapp.com/api/customers/${customerId}/orders`, {
            headers: {
                Authorization: 'Basic ' + btoa(`${loginData.email}:${loginData.password}`)
            },
        })
    }
    static async postOrder(newOrder: IOrder): Promise<AxiosResponse> {
        return axios.post(`https://apisneakerstore.herokuapp.com/api/orders`, newOrder)
    }
    static async deleteOrder(orderId: string, loginData: ILogin): Promise<AxiosResponse> {
        return axios.delete(`\`https://apisneakerstore.herokuapp.com/api/orders/${orderId}`, {
            headers: {
                Authorization: 'Basic ' + btoa(`${loginData.email}:${loginData.password}`)
            },
        })
    }
}