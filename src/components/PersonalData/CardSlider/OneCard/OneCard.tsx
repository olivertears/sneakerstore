import React, {Dispatch, FC, SetStateAction, useState} from 'react';
//@ts-ignore
import cl from "./OneCard.module.css";
import {cardPaymentSystemPattern} from "../../../../utils/patterns/cardPaymentSystemPattern";
import {ICard} from "../../../../models/ICard";
import {appImages} from "../../../../dataStorage/images/App";
import {useActions} from "../../../../hooks/useActions";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

interface ISideCardProps {
    card: ICard
    active: boolean
    setCardSettings: Dispatch<SetStateAction<ICard>>
    moveRight: boolean
    moveLeft: boolean
    position: string
}

const OneCard: FC<ISideCardProps> = ({card, active, setCardSettings, moveRight, moveLeft, position}) => {
    const {authorization} = useTypedSelector(state => state.customer)
    const {deleteCard} = useActions.useCardActions()

    return (
        <div
            key={card.id}
            className={`${cl.cardImage} ${card.id === '0' ? cl.addCard : cl.cardWrap} ${active ? cl.active : cl.notActive} ${position === 'left' && moveRight && cl.leftToRight} ${position === 'center' && moveRight && cl.centerToRight} ${position === 'right' && moveLeft && cl.rightToLeft} ${position === 'center' && moveLeft && cl.centerToLeft}`}
            onClick={() => active && setCardSettings(card)}
        >
            <img
                src={card.id !== '0' ? appImages.deleteBtn : ''}
                className={`${cl.deleteBtn} ${active && cl.deleteHover}`}
                onClick={() => active && deleteCard(card.id, authorization)}
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