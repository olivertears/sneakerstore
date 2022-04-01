import React, {FC, useState} from 'react';
import Login from "../components/Authorization/Login";
import Registration from "../components/Authorization/Registration";
import Recovery from "../components/Authorization/Recovery";
import Error from "../components/ReusedComponents/ErrorWarningWindow/Error";
import {useTypedSelector} from "../hooks/useTypedSelector";
import LoginWithGoogleForm from "../components/Authorization/LoginWithGoogleForm/LoginWithGoogleForm";

const Authorization: FC = () => {
    const {loginWithGoogleForm} = useTypedSelector(state => state.customer)
    const {error} = useTypedSelector(state => state.app)

    return (
        <div>
            {error && <Error message={error}/>}
            {loginWithGoogleForm && <LoginWithGoogleForm/>}
            <Login/>
            <Registration/>
            <Recovery/>
        </div>
    );
};

export default Authorization