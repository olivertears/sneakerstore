import axios, {AxiosResponse} from "axios";
import {IProduct} from "../models/IProduct";

export default class ProductService {
    static async getProducts(): Promise<AxiosResponse<IProduct[]>>{
        return axios.get('https://apisneakerstore.herokuapp.com/api/products')
    }
}