import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';
//@ts-ignore
import cl from './AddressList.module.css'
import {IAddress} from "../../../models/IAddress";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {appImages} from "../../../dataStorage/images/App";
import {useActions} from "../../../hooks/useActions";

interface IAddressListProps {
    setAddressSettings: Dispatch<SetStateAction<IAddress>>;
}

const AddressList: FC<IAddressListProps> = ({setAddressSettings}) => {
    const {addresses} = useTypedSelector(state => state.address)
    const {authorization} = useTypedSelector(state => state.customer)
    const {deleteAddress, setAddresses} = useActions.useAddressActions()

    useEffect(() => {
        localStorage.setItem('addresses', JSON.stringify(addresses))
    }, [addresses])

    useEffect(() => {
        setAddresses(JSON.parse(localStorage.getItem('addresses') || '') as IAddress[])
    }, [])


    return (
        <div className={cl.wrap}>
            <h1>ADDRESSES</h1>

            <div className={cl.allAddressesWrap}>
                {addresses.map((address, idx) =>
                    <div
                        key={address.id}
                        className={cl.addressWrap}
                        onClick={() => setAddressSettings(address)}
                    >
                        <div className={cl.number}>
                            {idx + 1}.
                        </div>
                        <div className={cl.addressData}>
                            {address.house}{address.apartment && '-' + address.apartment} {address.street} {address.city} {address.state} {address.country}
                        </div>
                        <img
                            className={cl.deleteBtn}
                            src={appImages.deleteBtn}
                            onClick={() => deleteAddress(address.id, authorization)}
                        />
                    </div>
                )}
            </div>


            <div
                className={cl.addBtn}
                onClick={() => setAddressSettings({id: '0'} as IAddress)}
            >
                <img src={appImages.addBtn}/>
            </div>

            <hr/>
        </div>
    );
};

export default AddressList