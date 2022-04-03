import {ILogin} from "../models/ILogin";
import axios, {AxiosResponse} from "axios";
import {IAddress} from "../models/IAddress";

export default class AddressService {
    static async getAddresses(customerId: string, authorization: string): Promise<AxiosResponse<IAddress[]>> {
        return axios.get(`https://apisneakerstore.herokuapp.com/api/customers/${customerId}/addresses`, {
            headers: {
                Authorization: 'Basic ' + authorization
            },
        })
    }
    static async postAddress(newAddress: IAddress, authorization: string): Promise<AxiosResponse> {
        return axios.post(`https://apisneakerstore.herokuapp.com/api/addresses`, newAddress, {
            headers: {
                Authorization: 'Basic ' + authorization
            },
        })
    }
    static async putAddress(changedAddress: IAddress, authorization: string): Promise<AxiosResponse> {
        return axios.put(`https://apisneakerstore.herokuapp.com/api/addresses`, changedAddress, {
            headers: {
                Authorization: 'Basic ' + authorization
            },
        })
    }
    static async deleteAddress(addressId: string, authorization: string): Promise<AxiosResponse> {
        return axios.delete(`https://apisneakerstore.herokuapp.com/api/addresses/${addressId}`, {
            headers: {
                Authorization: 'Basic ' + authorization
            },
        })
    }
}