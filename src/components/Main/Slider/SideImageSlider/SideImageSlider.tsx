import React, {Dispatch, FC, SetStateAction, useEffect, useRef, useState} from 'react';
// @ts-ignore
import cl from './SideImageSlider.module.css'

interface ISideSliderProps {
    images: string[][],
    clockwise: boolean,
    setIdx?: Dispatch<SetStateAction<number>>
}

const SideImageSlider: FC<ISideSliderProps> = ({images, clockwise, setIdx}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setIdx && setIdx(activeIndex)
        const interval = setTimeout(() => {
            setActiveIndex((current) => {
                const res = current === images.length - 1 ? 0 : current + 1
                return res
            })
        }, 3000)
    }, [activeIndex])

    const prevImgIndex = activeIndex ? activeIndex - 1 : images.length - 1
    const nextImgIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1

    // @ts-ignore
    return (
        <div className={cl.wrap}>
            <img
                className={`${cl.img} ${clockwise ? cl.transformPositive : cl.transformNegative}`}
                key={prevImgIndex}
                src = {images[prevImgIndex][0]}
            />
            <img
                className={cl.img}
                key={activeIndex}
                src = {images[activeIndex][0]}
            />
            <img
                className={`${cl.img} ${clockwise ? cl.transformNegative : cl.transformPositive}`}
                key={nextImgIndex}
                src = {images[nextImgIndex][0]}
            />
        </div>
    );
};

export default SideImageSlider