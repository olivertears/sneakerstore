import React, {FC, useState} from 'react';
import {authorizationImages} from "../../dataStorage/images/Authorization";
//@ts-ignore
import cl from './Authorization.module.css'
import {useActions} from "../../hooks/useActions";
import {capitalizePattern} from "../../utils/patterns/capitalizePattern";
import {IRegistration} from "../../models/IRegistration";

const Registration: FC = () => {
    const {registration} = useActions.useCustomerActions()

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
        const newCustomer: IRegistration = {
            password: password,
            firstName: capitalizePattern(name),
            lastName: capitalizePattern(surname),
            phone: phone,
            email: email,
            country: capitalizePattern(country),
            city: capitalizePattern(city || ''),
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
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^A-Za-z\s]/g,'') && !(e.ctrlKey && e.keyCode === 86) || e.preventDefault()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3><span>*</span>Surname</h3>
                    <input
                        required

                        value={surname}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^A-Za-z\s]/g,'') && !(e.ctrlKey && e.keyCode === 86) || e.preventDefault()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3><span>*</span>Country</h3>
                    <input
                        required

                        value={country}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^A-Za-z\s]/g,'') && !(e.ctrlKey && e.keyCode === 86) || e.preventDefault()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3>City</h3>
                    <input
                        value={city}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^A-Za-z\s]/g,'') && !(e.ctrlKey && e.keyCode === 86) || e.preventDefault()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3>Address</h3>
                    <input
                        maxLength={100}

                        value={address}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3><span>*</span>Phone</h3>
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

                        type={eyeOpen ? 'text' : 'password'}
                        className={cl.passwordInput}
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