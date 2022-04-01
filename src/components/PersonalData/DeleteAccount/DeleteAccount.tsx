import React, {FC} from 'react';
//@ts-ignore
import cl from './DeleteAccount.module.css'
import {useActions} from "../../../hooks/useActions";

const DeleteAccount: FC = () => {
    const {setWarning} = useActions.useAppActions()

    return (
        <div className={cl.wrap}>
            <h1>DELETE ACCOUNT</h1>
            <button
                className={cl.deleteAccountBtn}
                onClick={() => setWarning('Are you sure you want to delete your account? It will be impossible to restore it!')}
            >
                Delete Account
            </button>
        </div>
    );
};

export default DeleteAccount