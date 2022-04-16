import {CommentAction, CommentActionsEnum, CommentState} from "./types";
import {IComment} from "../../../models/IComment";
import {ICustomer} from "../../../models/ICustomer";


const initialState: CommentState = {
    comments: [] as IComment[],
    authors: [] as ICustomer[],
}

export default function CommentReducer(state = initialState, action: CommentAction): CommentState {
    switch (action.type) {
        case CommentActionsEnum.SET_COMMENTS:
            return {...state, comments: action.payload}
        case CommentActionsEnum.ADD_COMMENT:
            return {...state, comments: [...state.comments, action.payload]}
        case CommentActionsEnum.CHANGE_COMMENT:
            return {...state, comments: [...state.comments, state.comments[state.comments.findIndex(comment => comment.id === action.payload.id)] = action.payload]}
        case CommentActionsEnum.REMOVE_COMMENT:
            return {...state, comments: state.comments.filter(comment => comment.id === action.payload)}
        case CommentActionsEnum.SET_AUTHORS:
            return {...state, authors: action.payload}
        case CommentActionsEnum.ADD_AUTHOR:
            return {...state, authors: [...state.authors, action.payload]}
        default:
            return state
    }
}