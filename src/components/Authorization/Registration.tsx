import React, {FC, useState} from 'react';
import {authorizationImages} from "../../dataStorage/images/Authorization";
//@ts-ignore
import cl from './Authorization.module.css'
import {ICustomer} from "../../models/ICustomer";
import {useActions} from "../../hooks/useActions";

//TODO: улучшить проверку при отправке формы
//TODO: в номере телефона по умолчанию плюсик

const Registration: FC = () => {
    const {registration} = useActions()

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [country, setCountry] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [eyeOpen, setEyeOpen] = useState<boolean>(false)

    const postCustomerData = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const newCustomer: ICustomer = {
            id: Date.now().toString(),
            password: password,
            firstName: name,
            lastName: surname,
            phone: phone,
            email: email,
            country: country,
            city: city,
            address: address,
        }
        registration(newCustomer)
    }

    return (
        <div className={cl.wrap}>
            <h1>REGISTRATION</h1>
            <a href="https://apisneakerstore.herokuapp.com/oauth2/authorization/google">
                <h4>Login with Google</h4>
            </a>

            <form onSubmit={postCustomerData}>
                <div className={cl.inputWrap}>
                    <h3><span>*</span>Name</h3>
                    <input
                        required
                        value={name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3><span>*</span>Surname</h3>
                    <input
                        required
                        value={surname}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3><span>*</span>Country</h3>
                    <input
                        required
                        value={country}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3>City</h3>
                    <input
                        value={city}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3>Address</h3>
                    <input
                        value={address}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3><span>*</span>Phone</h3>
                    <input
                        required
                        minLength={10}
                        maxLength={13}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === '-' && e.preventDefault()}
                        type='number'
                        value={phone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                    />
                </div>
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
                    Registration
                </button>
            </form>
            <hr/>
        </div>
    );
};

export default Registration;