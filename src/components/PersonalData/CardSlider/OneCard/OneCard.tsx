import React, {Dispatch, FC, SetStateAction, useState} from 'react';
//@ts-ignore
import cl from "./OneCard.module.css";
import {cardPaymentSystemPattern} from "../../../../utils/patterns/cardPaymentSystemPattern";
import {ICard} from "../../../../models/ICard";
import {cardImages} from "../../../../dataStorage/images/Card";

interface ISideCardProps {
    card: ICard
    active: boolean
    setIsCardSettings: Dispatch<SetStateAction<boolean>>
    moveRight: boolean
    moveLeft: boolean
    position: string
}

const OneCard: FC<ISideCardProps> = ({card, active, setIsCardSettings, moveRight, moveLeft, position}) => {

    return (
        <div
            key={card.id}
            className={`${cl.cardImage} ${card.id === '0' ? cl.addCard : cl.cardWrap} ${active ? cl.active : cl.notActive} ${position === 'left' && moveRight && cl.leftToRight} ${position === 'center' && moveRight && cl.centerToRight} ${position === 'right' && moveLeft && cl.rightToLeft} ${position === 'center' && moveLeft && cl.centerToLeft}`}
            onClick={() => active && setIsCardSettings(true)}
        >
            <img
                src={card.id !== '0' ? cardImages.deleteBtn : ''}
                className={`${cl.deleteBtn} ${active && cl.deleteHover}`}
            />
            <img
                src={cardPaymentSystemPattern(card.number || '')}
                className={cl.paymentSystem}
            />
            <h4 className={cl.number}>{card.number}</h4>

            <div className={cl.wrapForValidDate}>
                <h4 className={cl.validThru}>{card.id === '0' ? '' : 'VALID THRU'}</h4>
                <h4 className={cl.validDate}>{card.validityDate}</h4>
            </div>
            <h4 className={cl.owner}>{card.owner}</h4>
        </div>
    );
};

export default OneCard