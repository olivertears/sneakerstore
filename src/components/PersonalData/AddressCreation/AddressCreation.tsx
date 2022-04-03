import React, {Dispatch, FC, SetStateAction, useState} from 'react';
//@ts-ignore
import cl from './AddressCreation.module.css'
import {IAddress} from "../../../models/IAddress";
import {randomUUID} from "../../../utils/randomUUID";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {capitalizePattern} from "../../../utils/patterns/capitalizePattern";

interface IAddressCreationProps {
    setAddressSettings: Dispatch<SetStateAction<IAddress>>
    addressSettings: IAddress
}

const AddressCreation: FC<IAddressCreationProps> = ({setAddressSettings, addressSettings}) => {
    const {customer, authorization} = useTypedSelector(state => state.customer)
    const {postAddress, putAddress} = useActions.useAddressActions()

    const [country, setCountry] = useState<string>(addressSettings.country)
    const [state, setState] = useState<string>(addressSettings.state)
    const [city, setCity] = useState<string>(addressSettings.city)
    const [street, setStreet] = useState<string>(addressSettings.street)
    const [house, setHouse] = useState<string>(addressSettings.house)
    const [apartment, setApartment] = useState<string>(addressSettings.apartment)

    const addAddress = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const newAddress: IAddress = {
            id: randomUUID(),
            country: capitalizePattern(country),
            state: capitalizePattern(state),
            city: capitalizePattern(city),
            street: capitalizePattern(street),
            house: house,
            apartment: apartment,
            customersIds: [customer.id]
        }
        postAddress(newAddress, authorization)
        setAddressSettings({} as IAddress)
    }

    const changeAddress = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const changedAddress: IAddress = {
            id: addressSettings.id,
            country: capitalizePattern(country),
            state: capitalizePattern(state),
            city: capitalizePattern(city),
            street: capitalizePattern(street),
            house: house,
            apartment: apartment,
            customersIds: [customer.id]
        }
        putAddress(changedAddress, authorization)
        setAddressSettings({} as IAddress)
    }

    return (
        <div>
            <div
                className={cl.wrap}
                onClick={() => setAddressSettings({} as IAddress)}
            >
                <form
                    className={cl.content}
                    onClick={(e:React.MouseEvent<HTMLFormElement>) => e.stopPropagation()}
                    onSubmit={addressSettings.id === '0' ? addAddress : changeAddress}
                >
                    <h1>Address Settings</h1>

                    <div className={cl.addressData}>
                        <h3>
                            {house}{apartment && '-' + apartment} {capitalizePattern(street)} {capitalizePattern(city)} {capitalizePattern(state)} {capitalizePattern(country)}
                        </h3>
                    </div>

                    <input
                        required
                        placeholder='COUNTRY'
                        value={country}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^A-Za-z\s]/g,'') && !(e.ctrlKey && e.keyCode === 86) || e.preventDefault()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)}
                    />
                    <input
                        required
                        placeholder='STATE / PROVINCE / AREA'
                        value={state}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^A-Za-z\s]/g,'') && !(e.ctrlKey && e.keyCode === 86) || e.preventDefault()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)}
                    />
                    <input
                        required
                        placeholder='CITY'
                        value={city}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^A-Za-z\s]/g,'') && !(e.ctrlKey && e.keyCode === 86) || e.preventDefault()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                    />

                    <div className={cl.lastInputRowWrap}>
                        <input
                            required
                            className={cl.streetInput}
                            placeholder='STREET'
                            value={street}
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^A-Za-z\s]/g,'') && !(e.ctrlKey && e.keyCode === 86) || e.preventDefault()}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStreet(e.target.value)}
                        />
                        <input
                            required
                            maxLength={5}
                            className={cl.houseOrApartmentInput}
                            placeholder='HOUSE'
                            value={house}
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^[0-9]/g, '') || [8, 37, 38, 39, 40, 46].includes(e.keyCode) || (e.ctrlKey && e.keyCode === 65) || e.preventDefault()}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHouse(e.target.value)}
                        />
                        <input
                            maxLength={5}
                            className={cl.houseOrApartmentInput}
                            placeholder='APARTMENT'
                            value={apartment}
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^[0-9]/g, '') || [8, 37, 38, 39, 40, 46].includes(e.keyCode) || (e.ctrlKey && e.keyCode === 65) || e.preventDefault()}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setApartment(e.target.value)}
                        />
                    </div>

                    <button type='submit'>Save</button>
                </form>
            </div>
        </div>
    );
};

export default AddressCreation