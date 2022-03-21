import React, {FC, Dispatch, SetStateAction} from 'react';
//@ts-ignore
import cl from './CardSlider.module.css'
import {cardImages} from "../../../dataStorage/images/Card";


interface ICardSliderProps {
    setIsCardSettings: Dispatch<SetStateAction<boolean>>;
}

const CardSlider: FC<ICardSliderProps> = ({setIsCardSettings}) => {
    return (
        <div className={cl.wrap}>
            <h1>BANK CARD</h1>
            <button
                onClick={() => setIsCardSettings(true)}
            >
                Save
            </button>
            <hr/>
        </div>
    );
};

export default CardSlider