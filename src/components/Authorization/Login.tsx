import React, {FC, useState} from 'react';
import {authorizationImages} from "../../dataStorage/images/Authorization";
//@ts-ignore
import cl from './Authorization.module.css'
import {useActions} from "../../hooks/useActions";
import {scrollIntoView} from "../../utils/scrollIntoView";
import {ILogin} from "../../models/ILogin";

const Login: FC = () => {
    const {login} = useActions()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [eyeOpen, setEyeOpen] = useState<boolean>(false)

    const loginCustomer = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const loginData: ILogin = {
            email: email,
            password: password,
        }
        login(loginData)
    }

    return (
        <div className={cl.wrap}>
            <h1 className={cl.loginTitle}>LOGIN</h1>
            <a href="https://apisneakerstore.herokuapp.com/oauth2/authorization/google">
                <h4>Login with Google</h4>
            </a>

            <form onSubmit={loginCustomer}>
                <div className={cl.inputWrap}>
                    <h3><span>*</span>Email</h3>
                    <input
                        required
                        type='email'
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3><span>*</span>Password</h3>
                    <input
                        required
                        minLength={6}
                        className={cl.passwordInput}
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

                <button
                    type='submit'
                    className={cl.authorizationButton}
                >
                    Login
                </button>
            </form>

            <h4
                className={cl.recoveryLink}
                onClick={() => scrollIntoView('recovery')}
            >Forgot your password?</h4>
            <hr/>
        </div>
    );
};

export default Login