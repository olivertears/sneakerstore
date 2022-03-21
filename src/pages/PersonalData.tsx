import React, {FC, useState} from 'react';
import Info from "../components/PersonalData/Info/Info";
import ChangePassword from "../components/PersonalData/ChangePassword/ChangePassword";
import CardSlider from "../components/PersonalData/CardSlider/CardSlider";
import CardCreation from "../components/PersonalData/CardCreation/CardCreation";
import Error from "../components/ReusedComponents/Error/Error";
import {useTypedSelector} from "../hooks/useTypedSelector";

const PersonalData: FC = () => {
    const {error} = useTypedSelector(state => state.app)
    const [isCardSettings, setIsCardSettings] = useState<boolean>(false)

    return (
        <div>
            {error && <Error message={error}/>}
            {isCardSettings && <CardCreation setIsCardSettings={setIsCardSettings}/>}
            <Info/>
            <CardSlider setIsCardSettings={setIsCardSettings}/>
            <ChangePassword/>
        </div>
    );
};

export default PersonalData