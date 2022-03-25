import {AppActionsCreators} from "./app/action-creators";
import {CustomerActionCreators} from "./customer/action-creators";
import {CardActionCreators} from "./card/action-creators";


export const allActionCreators = {
    ...AppActionsCreators,
    ...CustomerActionCreators,
    ...CardActionCreators
}