import React, {FC, useEffect, useRef, useState} from 'react';
// @ts-ignore
import cl from './CenterImageSlider.module.css'
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

interface ICenterSliderProps {
    images: string[],
    clockwise: boolean
}

const CenterImageSlider: FC<ICenterSliderProps> = ({images, clockwise}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setActiveIndex((current) => {
                const res = current === images.length - 1 ? 0 : current + 1
                return res
            })
        }, 6000)
    }, [activeIndex])

    const prevImgIndex = activeIndex ? activeIndex - 1 : images.length - 1
    const nextImgIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1

    return (
        <div className={cl.wrap}>
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