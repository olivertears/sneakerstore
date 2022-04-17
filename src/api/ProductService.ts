import axios, {AxiosResponse} from "axios";
import {IProduct} from "../models/IProduct";
import {ISize} from "../models/ISize";

export default class ProductService {
    static async getProducts(): Promise<AxiosResponse<IProduct[]>>{
        return axios.get('https://apisneakerstore.herokuapp.com/api/products')
    }
    static async getProduct(productId: string): Promise<AxiosResponse<IProduct>>{
        return axios.get(`https://apisneakerstore.herokuapp.com/api/products/${productId}`)
    }
    static async getSizes(productId: string): Promise<AxiosResponse<ISize[]>>{
        return axios.get(`https://apisneakerstore.herokuapp.com/api/products/${productId}/sizes`)
    }
    static async getSize(sizeId: string): Promise<AxiosResponse<ISize>>{
        return axios.get(`https://apisneakerstore.herokuapp.com/api/sizes/${sizeId}`)
    }
}