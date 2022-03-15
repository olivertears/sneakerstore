import {AppActionsCreators} from "./app/action-creators";
import {CustomerActionCreators} from "./customer/action-creators";


export const allActionCreators = {
    ...AppActionsCreators,
    ...CustomerActionCreators,
}