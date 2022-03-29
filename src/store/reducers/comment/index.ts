import {CommentAction, CommentActionsEnum, CommentState} from "./types";
import {IComment} from "../../../models/IComment";


const initialState: CommentState = {
    comments: [] as IComment[]
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
        default:
            return state
    }
}