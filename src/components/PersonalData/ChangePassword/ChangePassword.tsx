import React, {FC, useState} from 'react';
//@ts-ignore
import cl from './ChangePassword.module.css'
import {authorizationImages} from "../../../dataStorage/images/Authorization";
import {useActions} from "../../../hooks/useActions";
import {IChangePassword} from "../../../models/IChangePassword";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const ChangePassword: FC = () => {
    const {customer} = useTypedSelector(state => state.customer)
    const {setWarning} = useActions.useAppActions()
    const {changePassword} = useActions.useCustomerActions()

    const [oldPassword, setOldPassword] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [eyeOpen, setEyeOpen] = useState<boolean>(false)

    const changeCustomerPassword = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const changePasswordData: IChangePassword = {
            email: customer.email,
            oldPassword: oldPassword,
            newPassword: newPassword
        }
        changePassword(changePasswordData)
    }

    return (
        <div className={cl.wrap}>
            <h1>CHANGE PASSWORD</h1>
            <form onSubmit={changeCustomerPassword}>
                <div className={cl.inputWrap}>
                    <h3>Old Password</h3>
                    <input
                        required
                        minLength={6}
                        className={cl.passwordInput}
                        type={eyeOpen ? 'text' : 'password'}
                        value={oldPassword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOldPassword(e.target.value)}
                    />
                    <img
                        className={cl.eyeImage}
                        src={eyeOpen ? authorizationImages.eyeOpen : authorizationImages.eyeClose}
                        onClick={() => eyeOpen ? setEyeOpen(false) : setEyeOpen(true)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3>New Password</h3>
                    <input
                        required
                        minLength={6}
                        className={cl.passwordInput}
                        type={eyeOpen ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
                    />
                    <img
                        className={cl.eyeImage}
                        src={eyeOpen ? authorizationImages.eyeOpen : authorizationImages.eyeClose}
                        onClick={() => eyeOpen ? setEyeOpen(false) : setEyeOpen(true)}
                    />
                </div>
                <button
                    type='submit'
                    className={`${cl.authorizationButton} ${cl.recoveryButton}`}
                >
                    Save
                </button>
            </form>
            <hr/>
        </div>
    );
};

export default ChangePassword