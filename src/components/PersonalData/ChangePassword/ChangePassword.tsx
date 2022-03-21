import React, {FC, useState} from 'react';
//@ts-ignore
import cl from './ChangePassword.module.css'
import {authorizationImages} from "../../../dataStorage/images/Authorization";

const ChangePassword: FC = () => {
    const [oldPassword, setOldPassword] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [eyeOpen, setEyeOpen] = useState<boolean>(false)

    return (
        <div className={cl.wrap}>
            <h1>CHANGE PASSWORD</h1>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => console.log(e)}>
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
        </div>
    );
};

export default ChangePassword