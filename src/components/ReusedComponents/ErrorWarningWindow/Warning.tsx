import React, {FC} from 'react';
//@ts-ignore
import cl from './ErrorWarningWindow.module.css'
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../../router";

interface IWarningProps {
    message: string
}

const Warning: FC<IWarningProps> = ({message}) => {
    const {setWarning} = useActions.useAppActions()
    const {logout, deleteCustomer} = useActions.useCustomerActions()
    const {customer, loginData} = useTypedSelector(state => state.customer)
    const navigate = useNavigate()

    const confirm = (): void => {
        setWarning('')
        logout()
        navigate(RouteNames.AUTHORIZATION)
        message.includes('delete') && deleteCustomer(customer.id, loginData)
    }

    return (
        <div
            className={cl.wrap}
            onClick={() => message.includes('delete') && setWarning('')}
        >
            <div
                className={cl.content}
                onClick={(e:React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
                <h1>Warning</h1>
                <h3>{message}</h3>
                <button onClick={confirm}>OK</button>
            </div>
        </div>
    );
};

export default Warning