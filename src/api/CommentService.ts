import axios, {AxiosResponse} from "axios";
import {IComment} from "../models/IComment";

export default class CommentService {
    static async getComments(productId: string): Promise<AxiosResponse<IComment[]>> {
        return axios.get(`https://apisneakerstore.herokuapp.com/api/products/${productId}/comments`)
    }
    static async postComment(newComment: IComment, authorization: string): Promise<AxiosResponse> {
        return axios.post('https://apisneakerstore.herokuapp.com/api/comments', newComment, {
            headers: {
                Authorization: 'Basic ' + authorization
            },
        })
    }
    static async putComment(changedComment: IComment, authorization: string): Promise<AxiosResponse> {
        return axios.put('https://apisneakerstore.herokuapp.com/api/comments', changedComment, {
            headers: {
                Authorization: 'Basic ' + authorization
            },
        })
    }
    static async deleteComment(commentId: string, authorization: string): Promise<AxiosResponse> {
        return axios.delete(`https://apisneakerstore.herokuapp.com/api/comments/${commentId}`, {
            headers: {
                Authorization: 'Basic ' + authorization
            },
        })
    }
}