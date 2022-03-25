import React, {Dispatch, FC, SetStateAction} from 'react';
//@ts-ignore
import cl from "./SideCard.module.css";
import {cardPaymentSystemPattern} from "../../../../utils/patterns/cardPaymentSystemPattern";
import {ICard} from "../../../../models/ICard";
import {cardImages} from "../../../../dataStorage/images/Card";

interface ISideCardProps {
    card: ICard
}

const SideCard: FC<ISideCardProps> = ({card}) => {
    return (
        <div
            key={card.id}
            className={cl.sideCardImage}
            style={{backgroundImage: card.id === '0' ? `url(${cardImages.addCard})` : `url(${cardImages.cardWrap})`}}
        >
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

export default SideCard