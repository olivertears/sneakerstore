import React, {ChangeEvent, FC, useRef, useState} from 'react';
//@ts-ignore
import cl from './Avatar.module.css'
import {appImages} from "../../../dataStorage/images/App";
import AvatarCreation from "../AvatarCreation/AvatarCreation";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";

const Avatar: FC = () => {
    const {customer, authorization} = useTypedSelector(state => state.customer)
    const {putCustomer} = useActions.useCustomerActions()

    const [avatarUrl, setAvatarUrl] = useState<string>('')

    const changeAvatar = (e: ChangeEvent<HTMLInputElement>): void => {
        const reader = new FileReader()
        // @ts-ignore
        reader.readAsDataURL(e.target.files[0])

        reader.onload = function () {
            // @ts-ignore
            setAvatarUrl(reader.result || '')
        }
    }

    return (
        <div id='photoWrap' className={cl.photoWrap}>
            {avatarUrl && <AvatarCreation avatarUrl={avatarUrl} setAvatarUrl={setAvatarUrl}/>}
            {customer.avatar
                ?
                <>
                    <img
                        src={customer.avatar}
                        className={cl.avatar}
                    />
                    <img
                        src={appImages.deleteBtn}
                        className={cl.deleteBtn}
                        onClick={() => putCustomer({...customer, avatar: ''}, authorization)}
                    />
                </>
                :
                <img
                    src={appImages.addBtn}
                    className={cl.noAvatar}
                />
            }

            <input
                type="file"
                accept="image/*"
                className={cl.fileInput}
                onChange={(e: ChangeEvent<HTMLInputElement>) => changeAvatar(e)}
            />
        </div>
    );
};

export default Avatar