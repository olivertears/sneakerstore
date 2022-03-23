import React, {FC, useState} from 'react';
import {authorizationImages} from "../../dataStorage/images/Authorization";
//@ts-ignore
import cl from './Authorization.module.css'
import {useActions} from "../../hooks/useActions";
import {scrollIntoView} from "../../utils/scrolls/scrollIntoView";
import {ILogin} from "../../models/ILogin";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../router";

const Login: FC = () => {
    const {login} = useActions()
    const navigate = useNavigate()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const loginCustomer = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const loginData: ILogin = {
            email: email,
            password: password,
        }
        login(loginData)
        navigate(RouteNames.PROFILE)
    }

    return (
        <div className={cl.wrap}>
            <h1 className={cl.loginTitle}>LOGIN</h1>
            <a href="https://apisneakerstore.herokuapp.com/oauth2/authorization/google">
                <h4>Login with Google</h4>
            </a>

            <form onSubmit={loginCustomer}>
                <div className={cl.inputWrap}>
                    <h3>Email</h3>
                    <input
                        required

                        type='email'
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3>Password</h3>
                    <input
                        required
                        minLength={6}

                        type='password'
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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