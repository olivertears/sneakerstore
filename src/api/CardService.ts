import axios, {AxiosResponse} from "axios";
import {ICard} from "../models/ICard";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {ILogin} from "../models/ILogin";


export default class CardService {
    static async getCards(userId: string, loginData: ILogin): Promise<AxiosResponse<ICard[]>> {
        return axios.get(`https://apisneakerstore.herokuapp.com/api/users/${userId}/cards`, {
            headers: {
                Authorization: 'Basic ' + btoa(`${loginData.email}:${loginData.password}`)
            },
        })
    }
    static async postCard(newCard: ICard, loginData: ILogin): Promise<AxiosResponse> {
        return axios.post('https://apisneakerstore.herokuapp.com/api/cards', newCard, {
            headers: {
                Authorization: 'Basic ' + btoa(`${loginData.email}:${loginData.password}`)
            },
        })
    }
    static async deleteCard(cardId: string, loginData: ILogin): Promise<AxiosResponse> {
        return axios.delete(`https://apisneakerstore.herokuapp.com/api/cards/${cardId}`, {
            headers: {
                Authorization: 'Basic ' + btoa(`${loginData.email}:${loginData.password}`)
            },
        })
    }
    static async changeCard(changedCard: ICard, loginData: ILogin): Promise<AxiosResponse> {
        return axios.put('https://apisneakerstore.herokuapp.com/api/cards', changedCard, {
            headers: {
                Authorization: 'Basic ' + btoa(`${loginData.email}:${loginData.password}`)
            },
        })
    }
}