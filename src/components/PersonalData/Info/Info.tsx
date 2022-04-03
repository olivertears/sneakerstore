import React, {FC, useEffect, useState} from 'react';
//@ts-ignore
import cl from './Info.module.css'
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {ICustomer} from "../../../models/ICustomer";
import {useActions} from "../../../hooks/useActions";
import {capitalizePattern} from "../../../utils/patterns/capitalizePattern";
import Avatar from "../Avatar/Avatar";
import {randomUUID} from "../../../utils/randomUUID";

const Info: FC = () => {
    const {customer, authorization} = useTypedSelector(state => state.customer)
    const {putCustomer} = useActions.useCustomerActions()

    const [name, setName] = useState<string>(customer.firstName)
    const [surname, setSurname] = useState<string>(customer.lastName)
    const [phone, setPhone] = useState<string>(customer.phone)
    const [email, setEmail] = useState<string>(customer.email)

    const changeCustomerData = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const changedCustomer: ICustomer = {
            ...customer,
            firstName: capitalizePattern(name),
            lastName: capitalizePattern(surname),
            phone: phone,
            email: email,
            favoritesIds: [randomUUID()]
        }
        putCustomer(changedCustomer, authorization)
    }


    return (
        <div className={cl.wrap}>
            <h1>PERSONAL INFORMATION</h1>
            <div className={cl.photoAndTextWrap}>

                <Avatar/>

                <form onSubmit={changeCustomerData}>
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

                    <button
                        type='submit'
                        disabled={customer.firstName === name && customer.lastName === surname && customer.phone === phone && customer.email === email && true}
                        className={`${cl.authorizationButton} ${customer.firstName === name && customer.lastName === surname && customer.phone === phone && customer.email === email && cl.disabledBtn}`}
                    >
                        Save
                    </button>
                </form>
            </div>


            <hr/>
        </div>
    );
};

export default Info