import React, {FC, useEffect, useState} from 'react';
import Info from "../components/PersonalData/Info/Info";
import ChangePassword from "../components/PersonalData/ChangePassword/ChangePassword";
import CardSlider from "../components/PersonalData/CardSlider/CardSlider";
import CardCreation from "../components/PersonalData/CardCreation/CardCreation";
import Error from "../components/ReusedComponents/ErrorWarningWindow/Error";
import {useTypedSelector} from "../hooks/useTypedSelector";
import AddressList from "../components/PersonalData/AddressList/AddressList";
import AddressCreation from "../components/PersonalData/AddressCreation/AddressCreation";
import DeleteAccount from "../components/PersonalData/DeleteAccount/DeleteAccount";
import Warning from "../components/ReusedComponents/ErrorWarningWindow/Warning";
import {ICard} from "../models/ICard";
import {IAddress} from "../models/IAddress";
import {useActions} from "../hooks/useActions";

const PersonalData: FC = () => {
    const {error, warning} = useTypedSelector(state => state.app)
    const {setAddresses} = useActions.useAddressActions()
    const {setCards} = useActions.useCardActions()

    const [cardSettings, setCardSettings] = useState<ICard>({} as ICard)
    const [addressSettings, setAddressSettings] = useState<IAddress>({} as IAddress)

    useEffect(() => {
        setAddresses(JSON.parse(localStorage.getItem('addresses') || '') as IAddress[])
        setCards(JSON.parse(localStorage.getItem('cards') || '') as ICard[])
    }, [])

    return (
        <div>
            {error && <Error message={error}/>}
            {warning && <Warning message={warning}/>}
            {cardSettings.id && <CardCreation setCardSettings={setCardSettings} cardSettings={cardSettings}/>}
            {addressSettings.id && <AddressCreation setAddressSettings={setAddressSettings} addressSettings={addressSettings}/>}
            <Info/>
            <AddressList setAddressSettings={setAddressSettings}/>
            <CardSlider setCardSettings={setCardSettings}/>
            <ChangePassword/>
            <DeleteAccount/>
        </div>
    );
};

export default PersonalData