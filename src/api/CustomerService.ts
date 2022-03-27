import axios, {AxiosResponse} from "axios";
import {ILogin} from "../models/ILogin";
import {IResetPassword} from "../models/IResetPassword";
import {IRegistration} from "../models/IRegistration";
import {IChangePassword} from "../models/IChangePassword";
import {ICustomer} from "../models/ICustomer";

export default class CustomerService {
    static async getCustomer(customerId: string): Promise<AxiosResponse> {
        return axios.get(`https://apisneakerstore.herokuapp.com/api/customers/${customerId}`)
    }
    static async putCustomer(changedCustomer: ICustomer, loginData: ILogin): Promise<AxiosResponse> {
        return axios.put('https://apisneakerstore.herokuapp.com/api/customers', changedCustomer, {
            headers: {
                Authorization: 'Basic ' + btoa(`${loginData.email}:${loginData.password}`)
            },
        })
    }
    static async deleteCustomer(customerId: string, loginData: ILogin): Promise<AxiosResponse> {
        return axios.delete(`https://apisneakerstore.herokuapp.com/api/customers/${customerId}`, {
            headers: {
                Authorization: 'Basic ' + btoa(`${loginData.email}:${loginData.password}`)
            },
        })
    }


    static async registration(registrationData: IRegistration): Promise<AxiosResponse> {
        return axios.post('https://apisneakerstore.herokuapp.com/api/register', registrationData)
    }
    static async login(loginData: ILogin): Promise<AxiosResponse> {
        return axios.post('https://apisneakerstore.herokuapp.com/api/login', loginData, {
            headers: {
                Authorization: 'Basic ' + btoa(`${loginData.email}:${loginData.password}`)
            },
        })
    }
    static async checkDoesEmailExist(email: string): Promise<AxiosResponse> {
        return axios.post('https://apisneakerstore.herokuapp.com/api/forgot_password', {
            params: {
                email: email
            },
        })
    }
    static async resetPassword(resetPasswordData: IResetPassword): Promise<AxiosResponse> {
        return axios.post('https://apisneakerstore.herokuapp.com/api/recovery', resetPasswordData)
    }
    static async changePassword(changePasswordData: IChangePassword): Promise<AxiosResponse> {
        return axios.put('https://apisneakerstore.herokuapp.com/api/recovery', changePasswordData, {
            headers: {
                Authorization: 'Basic ' + btoa(`${changePasswordData.email}:${changePasswordData.oldPassword}`)
            },
        })
    }
}