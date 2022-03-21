import React, {FC, useState} from 'react';
//@ts-ignore
import cl from './Info.module.css'
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {ICustomer} from "../../../models/ICustomer";
import {useActions} from "../../../hooks/useActions";

const Info: FC = () => {
    const {customer} = useTypedSelector(state => state.customer)
    const {registration} = useActions()

    const [name, setName] = useState<string>(customer.firstName)
    const [surname, setSurname] = useState<string>(customer.lastName)
    const [country, setCountry] = useState<string>(customer.country)
    const [city, setCity] = useState<string>(customer.city || '')
    const [address, setAddress] = useState<string>(customer.address || '')
    const [phone, setPhone] = useState<string>(customer.phone)
    const [email, setEmail] = useState<string>(customer.email)

    const postCustomerData = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const newCustomer: ICustomer = {
            id: customer.id,
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
            <h1>PERSONAL INFORMATION</h1>
            <div className={cl.photoAndTextWrap}>

                <div className={cl.photoWrap}></div>

                <form onSubmit={postCustomerData}>
                    <div className={cl.inputWrap}>
                        <h3>Name</h3>
                        <input
                            required
                            value={name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        />
                    </div>
                    <div className={cl.inputWrap}>
                        <h3>Surname</h3>
                        <input
                            required
                            value={surname}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}
                        />
                    </div>
                    <div className={cl.inputWrap}>
                        <h3>Phone</h3>
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
                        <h3>Email</h3>
                        <input
                            required
                            type='email'
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={cl.inputWrap}>
                        <h3>Country</h3>
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
                </form>
            </div>

            <button
                type='submit'
                className={cl.authorizationButton}
            >
                Save
            </button>

            <hr/>
        </div>
    );
};

export default Info