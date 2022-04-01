import React, {FC} from 'react';
//@ts-ignore
import cl from './ProfilePage.module.css'
import {profileImages} from "../../dataStorage/images/Profile";
import {useActions} from "../../hooks/useActions";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../router";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const ProfilePage: FC = () => {
    const {customer, loginData} = useTypedSelector(state => state.customer)
    const {getCards} = useActions.useCardActions()
    const {getAddresses} = useActions.useAddressActions()
    const {logout} = useActions.useCustomerActions()
    const navigate = useNavigate()

    return (
        <div className={cl.wrap}>
            <div className={cl.twoItemsWrap}>
                <div
                    className={cl.contentWrap}
                    onClick={() => {
                        getCards(customer.id, loginData)
                        getAddresses(customer.id, loginData)
                        navigate(RouteNames.PERSONAL_DATA)
                    }}
                >
                    <img src={profileImages.personalData}/>
                    <h2>PERSONAL DATA</h2>
                </div>
                <div
                    className={cl.contentWrap}
                    onClick={() => navigate(RouteNames.ORDERS)}
                >
                    <img src={profileImages.orders}/>
                    <h2>ORDERS</h2>
                </div>
            </div>

            <div className={cl.twoItemsWrap}>
                <div
                    className={cl.contentWrap}
                    onClick={() => navigate(RouteNames.FAVOURITES)}
                >
                    <img src={profileImages.favourites}/>
                    <h2>FAVOURITES</h2>
                </div>
                <div
                    className={cl.contentWrap}
                    onClick={() => navigate(RouteNames.CART)}
                >
                    <img src={profileImages.cart}/>
                    <h2>CART</h2>
                </div>
            </div>

            <button onClick={() => {
                logout()
                navigate(RouteNames.AUTHORIZATION)
            }}>
                Logout
            </button>
        </div>
    );
};

export default ProfilePage