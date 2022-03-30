import React, {Dispatch, FC, SetStateAction} from 'react';
//@ts-ignore
import cl from './AddressCreation.module.css'

interface IAddressCreationProps {
    setIsAddressSettings: Dispatch<SetStateAction<boolean>>;
}

const AddressCreation: FC<IAddressCreationProps> = ({setIsAddressSettings}) => {
    return (
        <div>
            <h1>ADDRESS CREATION</h1>
        </div>
    );
};

export default AddressCreation