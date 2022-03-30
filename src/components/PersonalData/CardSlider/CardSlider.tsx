import React, {FC, Dispatch, SetStateAction, useState, useEffect} from 'react';
//@ts-ignore
import cl from './CardSlider.module.css'
import {cardImages} from "../../../dataStorage/images/Card";
import {cardPaymentSystemPattern} from "../../../utils/patterns/cardPaymentSystemPattern";
import SideCard from "./SideCard/SideCard";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";


interface ICardSliderProps {
    setIsCardSettings: Dispatch<SetStateAction<boolean>>;
}

const CardSlider: FC<ICardSliderProps> = ({setIsCardSettings}) => {
    const {customer, loginData} = useTypedSelector(state => state.customer)
    const {cards} = useTypedSelector(state => state.card)
    const {getCards, postCard, putCard, deleteCard} = useActions.useCardActions()

    const [activeImgIndex, setActiveImgIndex] = useState<number>(0);



    const prevImgIndex: number = activeImgIndex ? activeImgIndex - 1 : cards.length - 1
    const nextImgIndex: number = activeImgIndex === cards.length - 1 ? 0 : activeImgIndex + 1

    return (
        <div className={cl.wrap}>
            <h1>BANK CARD</h1>

            <div className={cl.sliderWrap}>
                <div
                    className={cl.arrow}
                    onClick={() => setActiveImgIndex(activeImgIndex === 0 ? cards.length - 1 : activeImgIndex - 1)}
                />

                {cards.length === 0
                    ?
                    ''
                    :
                    <>
                        <SideCard card={cards[prevImgIndex]}/>

                        <div
                            key={cards[activeImgIndex].id}
                            className={cl.cardImage}
                            onClick={() => setIsCardSettings(true)}
                            style={{backgroundImage: cards[activeImgIndex].id === '0' ? `url(${cardImages.addCard})` : `url(${cardImages.cardWrap})`}}
                        >
                            <img
                                src={cardPaymentSystemPattern(cards[activeImgIndex].number || '')}
                                className={cl.paymentSystem}
                            />
                            <h4 className={cl.number}>{cards[activeImgIndex].number}</h4>

                            <div className={cl.wrapForValidDate}>
                                <h4 className={cl.validThru}>{cards[activeImgIndex].id === '0' ? '' : 'VALID THRU'}</h4>
                                <h4 className={cl.validDate}>{cards[activeImgIndex].validityDate}</h4>
                            </div>
                            <h4 className={cl.owner}>{cards[activeImgIndex].owner}</h4>
                        </div>

                        <SideCard card={cards[nextImgIndex]}/>
                    </>
                }


                <div
                    className={cl.arrow}
                    onClick={() => setActiveImgIndex(activeImgIndex === cards.length - 1 ? 0 : activeImgIndex + 1)}
                />
            </div>

            <button onClick={() => getCards(customer.id, loginData)}>GET CARDS</button>
            <button onClick={() => postCard({id: '0', cvv: '', customersIds: [customer.id], validityDate: '', owner: 'scbh', number: '0000' }, loginData)}>ADD CARD</button>
            <button onClick={() => putCard({id: '0', cvv: '', customersIds: [''], validityDate: '', owner: '', number: '' }, loginData)}>CHANGE CARD</button>
            <button onClick={() => deleteCard('0', loginData)}>DELETE CARDS</button>

            <hr/>
        </div>
    );
};

export default CardSlider