import React, {Dispatch, FC, SetStateAction} from 'react';
//@ts-ignore
import cl from './AddressList.module.css'

interface IAddressListProps {
    setIsAddressSettings: Dispatch<SetStateAction<boolean>>;
}

const AddressList: FC<IAddressListProps> = ({setIsAddressSettings}) => {
    return (
        <div>
            <h1>ADDRESSES</h1>
            <hr/>
        </div>
    );
};

export default AddressList