import React, {FC, useState} from 'react';
import Info from "../components/PersonalData/Info/Info";
import ChangePassword from "../components/PersonalData/ChangePassword/ChangePassword";
import CardSlider from "../components/PersonalData/CardSlider/CardSlider";
import CardCreation from "../components/PersonalData/CardCreation/CardCreation";
import Error from "../components/ReusedComponents/Error/Error";
import {useTypedSelector} from "../hooks/useTypedSelector";
import AddressList from "../components/PersonalData/AddressList/AddressList";
import AddressCreation from "../components/PersonalData/AddressCreation/AddressCreation";
import DeleteAccount from "../components/PersonalData/DeleteAccount/DeleteAccount";

const PersonalData: FC = () => {
    const {error} = useTypedSelector(state => state.app)
    const [isCardSettings, setIsCardSettings] = useState<boolean>(false)
    const [isAddressSettings, setIsAddressSettings] = useState<boolean>(false)

    return (
        <div>
            {error && <Error message={error}/>}
            {isCardSettings && <CardCreation setIsCardSettings={setIsCardSettings}/>}
            {isAddressSettings && <AddressCreation setIsAddressSettings={setIsAddressSettings}/>}
            <Info/>
            <AddressList setIsAddressSettings={setIsAddressSettings}/>
            <CardSlider setIsCardSettings={setIsCardSettings}/>
            <ChangePassword/>
            <DeleteAccount/>
        </div>
    );
};

export default PersonalData