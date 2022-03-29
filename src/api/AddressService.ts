import {ILogin} from "../models/ILogin";
import axios, {AxiosResponse} from "axios";
import {IAddress} from "../models/IAddress";

export default class AddressService {
    static async getAddresses(customerId: string, loginData: ILogin): Promise<AxiosResponse<IAddress[]>> {
        return axios.get(`https://apisneakerstore.herokuapp.com/api/customers/${customerId}/addresses`, {
            headers: {
                Authorization: 'Basic ' + btoa(`${loginData.email}:${loginData.password}`)
            },
        })
    }
    static async postAddress(newAddress: IAddress, loginData: ILogin): Promise<AxiosResponse> {
        return axios.post(`https://apisneakerstore.herokuapp.com/api/addresses`, newAddress, {
            headers: {
                Authorization: 'Basic ' + btoa(`${loginData.email}:${loginData.password}`)
            },
        })
    }
    static async putAddress(changedAddress: IAddress, loginData: ILogin): Promise<AxiosResponse> {
        return axios.put(`https://apisneakerstore.herokuapp.com/api/addresses`, changedAddress, {
            headers: {
                Authorization: 'Basic ' + btoa(`${loginData.email}:${loginData.password}`)
            },
        })
    }
    static async deleteAddress(addressId: string, loginData: ILogin): Promise<AxiosResponse> {
        return axios.delete(`https://apisneakerstore.herokuapp.com/api/addresses/${addressId}`, {
            headers: {
                Authorization: 'Basic ' + btoa(`${loginData.email}:${loginData.password}`)
            },
        })
    }
}