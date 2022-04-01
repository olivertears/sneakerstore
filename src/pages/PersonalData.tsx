import React, {FC, useState} from 'react';
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

const PersonalData: FC = () => {
    const {error, warning} = useTypedSelector(state => state.app)
    const [cardSettings, setCardSettings] = useState<ICard>({} as ICard)
    const [addressSettings, setAddressSettings] = useState<IAddress>({} as IAddress)

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