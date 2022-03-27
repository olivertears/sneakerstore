import {ILogin} from "../models/ILogin";
import axios, {AxiosResponse} from "axios";
import {ICard} from "../models/ICard";
import {IComment} from "../models/IComment";

export default class CommentService {
    static async getComments(productId: string): Promise<AxiosResponse<IComment[]>> {
        return axios.get(`https://apisneakerstore.herokuapp.com/api/products/${productId}/comments`)
    }
    static async postComment(newComment: IComment, loginData: ILogin): Promise<AxiosResponse> {
        return axios.post('https://apisneakerstore.herokuapp.com/api/comments', newComment, {
            headers: {
                Authorization: 'Basic ' + btoa(`${loginData.email}:${loginData.password}`)
            },
        })
    }
    static async putComment(changedComment: IComment, loginData: ILogin): Promise<AxiosResponse> {
        return axios.put('https://apisneakerstore.herokuapp.com/api/comments', changedComment, {
            headers: {
                Authorization: 'Basic ' + btoa(`${loginData.email}:${loginData.password}`)
            },
        })
    }
    static async deleteComment(commentId: string, loginData: ILogin): Promise<AxiosResponse> {
        return axios.delete(`https://apisneakerstore.herokuapp.com/api/comments/${commentId}`, {
            headers: {
                Authorization: 'Basic ' + btoa(`${loginData.email}:${loginData.password}`)
            },
        })
    }
}