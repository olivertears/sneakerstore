import React, {FC, useState} from 'react';
import {authorizationImages} from "../../dataStorage/images/Authorization";
//@ts-ignore
import cl from './Authorization.module.css'
import {useActions} from "../../hooks/useActions";
import {IRecovery} from "../../models/IRecovery";

const Recovery: FC = () => {
    const {checkDoesEmailExist, recovery} = useActions()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [code, setCode] = useState<string>('')
    const [isReal, setIsReal] = useState<boolean>(false)

    const [eyeOpen, setEyeOpen] = useState<boolean>(false)

    const loginCustomer = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const loginData: {password: string, email: string} = {
            password: password,
            email: email,
        }
        //registration(loginData)
    }

    const recoveryAccount = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(isReal) {
            const recoveryData: IRecovery = {
                newPassword: password,
                verificationCode: code
            }
            recovery(recoveryData)
        } else {
            checkDoesEmailExist(email) ? setIsReal(true) : setIsReal(false)
        }
    }

    return (
        <div className={cl.wrap}>
            <h1 id='recovery'>RECOVERY</h1>

            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => recoveryAccount(e)}>
                <div className={cl.inputWrap}>
                    <h3><span>*</span>Email</h3>
                    <input
                        required
                        readOnly={isReal ? true : false}
                        className={isReal ? cl.emailIsRealInput : ''}
                        type='email'
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3><span>*</span>Password</h3>
                    <input
                        required
                        readOnly={isReal ? true : false}
                        className={`${cl.passwordInput} ${isReal ? cl.emailIsRealInput : ''}`}
                        minLength={6}
                        type={eyeOpen ? 'text' : 'password'}
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
                    <h3><span>*</span>Code</h3>
                    <input
                      required
                      minLength={4}
                      maxLength={4}
                      type='number'
                      value={code}
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