import React, {Dispatch, FC, SetStateAction, useState} from 'react';
//@ts-ignore
import cl from './LoginWithGoogleForm.module.css'
import {authorizationImages} from "../../../dataStorage/images/Authorization";
import {IRegistration} from "../../../models/IRegistration";
import {capitalizePattern} from "../../../utils/patterns/capitalizePattern";
import {useActions} from "../../../hooks/useActions";

const LoginWithGoogleForm: FC = () => {
    const {registration, setLoginWithGoogleForm} = useActions.useCustomerActions()

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [eyeOpenGoogle, setEyeOpenGoogle] = useState<boolean>(false)

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
        setLoginWithGoogleForm(false)
    }

    return (
        <div className={cl.wrap} onClick={() => setLoginWithGoogleForm(false)}>
            <div
                className={cl.content}
                onClick={(e:React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
                <h1>REGISTRATION WITH GOOGLE</h1>

                <form onSubmit={postCustomerData}>
                    <div className={cl.formDataWrap}>
                        <div className={cl.inputTxt}>
                            <h3>Name</h3>
                            <h3>Surname</h3>
                            <h3>Phone</h3>
                            <h3>Email</h3>
                            <h3>Password</h3>
                        </div>
                        <div className={cl.inputWrap}>
                            <input
                                required

                                value={name}
                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^A-Za-z\s]/g,'') && !(e.ctrlKey && e.keyCode === 86) || e.preventDefault()}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                            />
                            <input
                                required

                                value={surname}
                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^A-Za-z\s]/g,'') && !(e.ctrlKey && e.keyCode === 86) || e.preventDefault()}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}
                            />
                            <div className={cl.phoneInputWrap}>
                                <div className={cl.phonePlus}>+</div>
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
                            <input
                                required

                                type='email'
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            />
                            <div className={cl.passwordInputWrap}>
                                <input
                                    required
                                    minLength={6}

                                    type={eyeOpenGoogle ? 'text' : 'password'}
                                    className={cl.passwordInput}
                                    value={password}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                />
                                <img
                                    className={cl.eyeImage}
                                    src={eyeOpenGoogle ? authorizationImages.eyeOpen : authorizationImages.eyeClose}
                                    onClick={() => eyeOpenGoogle ? setEyeOpenGoogle(false) : setEyeOpenGoogle(true)}
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type='submit'
                        className={cl.authorizationButton}
                    >
                        Confirm
                    </button>
                </form>

            </div>
        </div>
    );
};

export default LoginWithGoogleForm