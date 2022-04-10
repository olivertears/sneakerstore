import React, {FC, useEffect, useState} from 'react';
// @ts-ignore
import cl from './CurrencyChange.module.css'
import {navbarImages} from '../../../dataStorage/images/Navbar'
import {arrOfCurrency} from "../../../dataStorage/currency";
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {ICurrency} from "../../../models/ICurrency";

const CurrencyChange: FC = () => {
    const {setCurrency} = useActions.useAppActions()
    const {currency} = useTypedSelector(state => state.app)

    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        if(localStorage.getItem('currency')) {
            setCurrency(JSON.parse(localStorage.getItem('currency') || '') as ICurrency)
        }
    }, [])

    return (
        <div className={cl.wrap}>
            <div className={cl.header}
                 onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}
            >
                <h1 className={cl.currency}>{currency.symbol}</h1>
                <img src={isOpen ? navbarImages.currencyOn : navbarImages.currencyOff}/>
            </div>
            <div className={cl.list}>
                {isOpen
                    &&
                    arrOfCurrency.map(currency =>
                        <h1
                            className={cl.option}
                            key={currency.symbol}
                            onClick={() => {
                                setIsOpen(false)
                                setCurrency({label: currency.label, symbol: currency.symbol, exchangeRate: currency.exchangeRate})
                            }}
                        >
                            {currency.symbol} {currency.label}
                        </h1>
                    )
                }
            </div>
        </div>
    );
};

export default CurrencyChange