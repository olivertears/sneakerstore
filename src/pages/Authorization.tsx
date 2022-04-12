import React, {FC, useState} from 'react';
import Login from "../components/Authorization/Login";
import Registration from "../components/Authorization/Registration";
import Recovery from "../components/Authorization/Recovery";
import Error from "../components/ReusedComponents/ErrorWarningWindow/Error";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Authorization: FC = () => {
    const {error} = useTypedSelector(state => state.app)

    return (
        <div>
            {error && <Error message={error}/>}
            <Login/>
            <Registration/>
            <Recovery/>
        </div>
    );
};

export default Authorization