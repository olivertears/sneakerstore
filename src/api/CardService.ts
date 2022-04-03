import axios, {AxiosResponse} from "axios";
import {ICard} from "../models/ICard";
import {ILogin} from "../models/ILogin";


export default class CardService {
    static async getCards(customerId: string, authorization: string): Promise<AxiosResponse<ICard[]>> {
        return axios.get(`https://apisneakerstore.herokuapp.com/api/customers/${customerId}/cards`, {
            headers: {
                Authorization: 'Basic ' + authorization
            },
        })
    }
    static async postCard(newCard: ICard, authorization: string): Promise<AxiosResponse> {
        // return axios.post('https://apisneakerstore.herokuapp.com/api/cards', newCard)
        return axios.post('https://apisneakerstore.herokuapp.com/api/cards', newCard, {
            headers: {
                Authorization: 'Basic ' + authorization
            },
        })
    }
    static async putCard(changedCard: ICard, authorization: string): Promise<AxiosResponse> {
        return axios.put('https://apisneakerstore.herokuapp.com/api/cards', changedCard, {
            headers: {
                Authorization: 'Basic ' + authorization
            },
        })
    }
    static async deleteCard(cardId: string, authorization: string): Promise<AxiosResponse> {
        return axios.delete(`https://apisneakerstore.herokuapp.com/api/cards/${cardId}`, {
            headers: {
                Authorization: 'Basic ' + authorization
            },
        })
    }
}