import axios, {AxiosResponse} from "axios";
import {ISize} from "../models/ISize";

export default class SizeService {
    static async getSizes(productId: string): Promise<AxiosResponse<ISize[]>> {
        return axios.get(`https://apisneakerstore.herokuapp.com/api/products/${productId}/sizes`)
    }
}