import React, {FC, Dispatch, SetStateAction, useState, useEffect} from 'react';
//@ts-ignore
import cl from './CardSlider.module.css'
import OneCard from "./OneCard/OneCard";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";


interface ICardSliderProps {
    setIsCardSettings: Dispatch<SetStateAction<boolean>>;
}

const CardSlider: FC<ICardSliderProps> = ({setIsCardSettings}) => {
    const {customer, loginData} = useTypedSelector(state => state.customer)
    const {cards} = useTypedSelector(state => state.card)
    const {getCards, postCard, putCard, deleteCard} = useActions.useCardActions()

    const [activeImgIndex, setActiveImgIndex] = useState<number>(cards.length > 1 ? 1 : 0);
    const prevImgIndex: number = activeImgIndex ? activeImgIndex - 1 : cards.length - 1
    const nextImgIndex: number = activeImgIndex === cards.length - 1 ? 0 : activeImgIndex + 1

    const [right, setRight] = useState(false)
    const [left, setLeft] = useState(false)

    return (
        <div className={cl.wrap}>
            <h1>BANK CARD</h1>

            <div className={cl.sliderWrap}>
                <div
                    className={cl.arrow}
                    onClick={() => {
                        setLeft(true)
                        setTimeout(() => {
                            setActiveImgIndex(activeImgIndex === 0 ? cards.length - 1 : activeImgIndex - 1)
                            setLeft(false)
                        }, 450)
                    }}
                />

                <OneCard card={cards[prevImgIndex]} active={false} setIsCardSettings={setIsCardSettings} moveRight={right} moveLeft={left} position={'left'}/>
                <OneCard card={cards[activeImgIndex]} active={true} setIsCardSettings={setIsCardSettings} moveRight={right} moveLeft={left} position={'center'}/>
                <OneCard card={cards[nextImgIndex]} active={false} setIsCardSettings={setIsCardSettings} moveRight={right} moveLeft={left} position={'right'}/>

                <div
                    className={cl.arrow}
                    onClick={() => {
                        setRight(true)
                        setTimeout(() => {
                            setActiveImgIndex(activeImgIndex === cards.length - 1 ? 0 : activeImgIndex + 1)
                            setRight(false)
                        }, 450)
                    }}
                />
            </div>
            <hr/>
        </div>
    );
};

export default CardSlider