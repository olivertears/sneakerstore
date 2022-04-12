import React, {FC, useEffect, useRef, useState} from 'react';
// @ts-ignore
import cl from './CenterImageSlider.module.css'
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useActions} from "../../../../hooks/useActions";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../../../router";

interface ICenterSliderProps {
    images: string[],
    clockwise: boolean
}

const CenterImageSlider: FC<ICenterSliderProps> = ({images, clockwise}) => {
    const {setFilter, setCatalogPage} = useActions.useProductActions()
    const {currency} = useTypedSelector(state => state.app)
    const navigate = useNavigate()

    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            setActiveIndex((current) => {
                const res = current === images.length - 1 ? 0 : current + 1
                return res
            })
        }, 6000)
    }, [activeIndex])

    const prevImgIndex: number = activeIndex ? activeIndex - 1 : images.length - 1
    const nextImgIndex: number = activeIndex === images.length - 1 ? 0 : activeIndex + 1

    return (
        <div
            className={cl.wrap}
            onClick={() => {
                setFilter({
                    price: [55 * currency.exchangeRate, 205 * currency.exchangeRate],
                    gender: [clockwise ? 'man' : 'woman'] as string[],
                    season: [] as string[],
                    color: [] as string[],
                    brand: [] as string[]
                })
                setCatalogPage(1)
                navigate(RouteNames.CATALOG)
            }}
        >
            <img
                className={`${cl.img} ${clockwise ? cl.transformPositive : cl.transformNegative}`}
                key={prevImgIndex}
                src = {images[prevImgIndex]}
            />
            <img
                className={cl.img}
                key={activeIndex}
                src = {images[activeIndex]}
            />
            <img
                className={`${cl.img} ${clockwise ? cl.transformNegative : cl.transformPositive}`}
                key={nextImgIndex}
                src = {images[nextImgIndex]}
            />
        </div>
    );
};

export default CenterImageSlider