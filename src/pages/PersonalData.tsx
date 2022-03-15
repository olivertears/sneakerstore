import React, {FC} from 'react';
import Info from "../components/PersonalData/Info/Info";
import ChangePassword from "../components/PersonalData/ChangePassword/ChangePassword";

const PersonalData: FC = () => {
    return (
        <div>
            <Info/>
            <ChangePassword/>
        </div>
    );
};

export default PersonalData