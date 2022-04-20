import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
// @ts-ignore
import cl from "./CustomInputTypeNumber.module.css";

interface CustomInputProps {
    maxValue: number
    productPrice: number
    totalPrice: number
    setTotalPrice: Dispatch<SetStateAction<number>>
}

const CustomInputTypeNumber: FC<CustomInputProps> = ({maxValue, productPrice, totalPrice, setTotalPrice}) => {
    const [value, setValue] = useState<number>(maxValue > 0 ? 1 : 0)

    return (
        <div className={cl.amountWrap}>
            <div
                className={cl.signWrap}
                onClick={() => {
                    if(value < maxValue) {
                        setValue(value + 1)
                        setTotalPrice(totalPrice + productPrice)
                    }
                }}
            >
                <div className={cl.horizontalLine}/>
                <div className={cl.verticalLine}/>
            </div>
            <input
                type='number'
                value={value}
                className={cl.amount}
                readOnly
            />
            <div className={cl.signWrap}
                 onClick={() => {
                     if(value > 0) {
                         setValue(value - 1)
                         setTotalPrice(totalPrice - productPrice)
                     }
                 }}
            >
                <div className={cl.horizontalLine}/>
            </div>
        </div>
    );
};

export default CustomInputTypeNumber