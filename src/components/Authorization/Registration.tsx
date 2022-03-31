import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {authorizationImages} from "../../dataStorage/images/Authorization";
//@ts-ignore
import cl from './Authorization.module.css'
import {useActions} from "../../hooks/useActions";
import {capitalizePattern} from "../../utils/patterns/capitalizePattern";
import {IRegistration} from "../../models/IRegistration";

const Registration: FC = () => {
    const {registration, loginWithGoogleForm} = useActions.useCustomerActions()

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [eyeOpenReg, setEyeOpenReg] = useState<boolean>(false)

    const postCustomerData = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const newCustomer: IRegistration = {
            password: password,
            firstName: capitalizePattern(name),
            lastName: capitalizePattern(surname),
            phone: phone,
            email: email,
        }
        registration(newCustomer)
    }

    return (
        <div className={cl.wrap}>
            <h1>REGISTRATION</h1>
            <a
                href="https://apisneakerstore.herokuapp.com/oauth2/authorization/google"
                onClick={() => loginWithGoogleForm()}
            >
                <h4>Login with Google</h4>
            </a>

            <form onSubmit={postCustomerData}>
                <div className={cl.inputWrap}>
                    <h3>Name</h3>
                    <input
                        required

                        value={name}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^A-Za-z\s]/g,'') && !(e.ctrlKey && e.keyCode === 86) || e.preventDefault()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3>Surname</h3>
                    <input
                        required

                        value={surname}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^A-Za-z\s]/g,'') && !(e.ctrlKey && e.keyCode === 86) || e.preventDefault()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3>Phone</h3>
                    <h2 className={cl.phonePlus}>+</h2>
                    <input
                        required
                        minLength={10}
                        maxLength={18}

                        className={cl.phoneInput}
                        value={phone}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^[0-9]/g, '') || [8, 37, 38, 39, 40, 46].includes(e.keyCode) || (e.ctrlKey && e.keyCode === 65) || e.preventDefault()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                    />
                </div>
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

                        type={eyeOpenReg ? 'text' : 'password'}
                        className={cl.passwordInput}
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    <img
                        className={cl.eyeImage}
                        src={eyeOpenReg ? authorizationImages.eyeOpen : authorizationImages.eyeClose}
                        onClick={() => eyeOpenReg ? setEyeOpenReg(false) : setEyeOpenReg(true)}
                    />
                </div>

                <button
                    type='submit'
                    className={cl.authorizationButton}
                >
                    Registration
                </button>
            </form>
            <hr/>
        </div>
    );
};

export default Registration;