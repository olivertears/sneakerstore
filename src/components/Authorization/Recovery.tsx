import React, {FC, useState} from 'react';
import {authorizationImages} from "../../dataStorage/images/Authorization";
//@ts-ignore
import cl from './Authorization.module.css'
import {useActions} from "../../hooks/useActions";
import {IResetPassword} from "../../models/IResetPassword";

const Recovery: FC = () => {
    const {checkDoesEmailExist, resetPassword} = useActions.useCustomerActions()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [code, setCode] = useState<string>('')
    const [isReal, setIsReal] = useState<boolean>(false)

    const [eyeOpen, setEyeOpen] = useState<boolean>(false)

    const recoveryAccount = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(isReal) {
            const resetPasswordData: IResetPassword = {
                email: email,
                newPassword: password,
                code: Number(code)
            }
            resetPassword(resetPasswordData)
        } else {
            checkDoesEmailExist(email) ? setIsReal(true) : setIsReal(false)
        }
    }

    return (
        <div className={cl.wrap}>
            <h1 id='recovery'>RECOVERY</h1>

            <form onSubmit={recoveryAccount}>
                <div className={cl.inputWrap}>
                    <h3>Email</h3>
                    <input
                        required
                        readOnly={isReal ? true : false}

                        type='email'
                        className={isReal ? cl.emailIsRealInput : ''}
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3>Password</h3>
                    <input
                        required
                        readOnly={isReal ? true : false}
                        minLength={6}

                        type={eyeOpen ? 'text' : 'password'}
                        className={`${cl.passwordInput} ${isReal ? cl.emailIsRealInput : ''}`}
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    <img
                        className={cl.eyeImage}
                        src={eyeOpen ? authorizationImages.eyeOpen : authorizationImages.eyeClose}
                        onClick={() => eyeOpen ? setEyeOpen(false) : setEyeOpen(true)}
                    />
                </div>

                {isReal &&
                  <div className={cl.inputWrap}>
                    <h3>Code</h3>
                    <input
                      required
                      minLength={4}
                      maxLength={4}

                      value={code}
                      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^[0-9]/g, '') || [8, 37, 38, 39, 40, 46].includes(e.keyCode) || (e.ctrlKey && e.keyCode === 65) || e.preventDefault()}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
                    />
                  </div>
                }

                <button
                    type='submit'
                    className={`${cl.authorizationButton} ${cl.recoveryButton}`}
                >
                    Confirm
                </button>
            </form>
        </div>
    );
};

export default Recovery