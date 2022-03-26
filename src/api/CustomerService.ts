import axios, {AxiosResponse} from "axios";
import {ICustomer} from "../models/ICustomer";
import {ILogin} from "../models/ILogin";
import {IResetPassword} from "../models/IResetPassword";

export default class CustomerService {
    static async registration(newCustomer: ICustomer): Promise<AxiosResponse> {
        return axios.post('https://apisneakerstore.herokuapp.com/api/register', newCustomer)
    }
    static async login(loginData: ILogin): Promise<AxiosResponse> {
        return axios.post('https://apisneakerstore.herokuapp.com/api/login', loginData, {
            headers: {
                Authorization: 'Basic ' + btoa(`${loginData.email}:${loginData.password}`)
            },
        })
    }
    static async loginWithGoogle(): Promise<AxiosResponse> {
        return axios.get('https://apisneakerstore.herokuapp.com/oauth2/authorization/google')
    }
    static async checkDoesEmailExist(email: string): Promise<AxiosResponse> {
        return axios.post('https://apisneakerstore.herokuapp.com/api/recovery')
    }
    static async recovery(recoveryData: IResetPassword): Promise<AxiosResponse> {
        return axios.post('https://apisneakerstore.herokuapp.com/api/recovery')
    }
}