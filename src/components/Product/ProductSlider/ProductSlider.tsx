import React, {Dispatch, FC, SetStateAction, useEffect, useRef, useState} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
// @ts-ignore
import cl from './ProductSlider.module.css';
import {catalogImages} from "../../../dataStorage/images/Catalog";

interface IProductSliderProps {
    activeImgIndex: number
    setActiveImgIndex: Dispatch<SetStateAction<number>>
}

const ProductSlider: FC<IProductSliderProps> = ({activeImgIndex, setActiveImgIndex}) => {
    const {selectedProduct} = useTypedSelector(state => state.product)

    const ratioTop = useRef<number>(-1)

    useEffect(() => {
        // @ts-ignore
        const photoWrap: HTMLDivElement = document.getElementById('photoWrap')
        // @ts-ignore
        const topArrow: HTMLDivElement = document.getElementById('topArrow')
        // @ts-ignore
        const bottomArrow: HTMLDivElement = document.getElementById('bottomArrow')
        const slides = photoWrap.getElementsByClassName(`${cl.sliderPhoto}`)

        let firstSlide = slides[0]
        let secondSlide = slides[1]
        let lastSlide = slides[slides.length - 1]
        let prevLastSlide = slides[slides.length - 2]

        let cloneFirst = firstSlide.cloneNode(true)
        let cloneSecond = secondSlide.cloneNode(true)
        let cloneLast = lastSlide.cloneNode(true)
        let clonePrevLast = prevLastSlide.cloneNode(true)

        photoWrap.appendChild(cloneFirst)
        photoWrap.appendChild(cloneSecond)
        photoWrap.insertBefore(cloneLast, firstSlide)
        photoWrap.insertBefore(clonePrevLast, cloneLast)

        topArrow.addEventListener('click', () => {
            photoWrap.style.transition = 'top 0.5s ease-in-out'
            ratioTop.current = ratioTop.current + 1
            photoWrap.style.top = `calc(100% / 3 * ${ratioTop.current})`
        })

        bottomArrow.addEventListener('click', () => {
            photoWrap.style.transition = 'top 0.5s ease-in-out'
            ratioTop.current = ratioTop.current - 1
            photoWrap.style.top = `calc(100% / 3 * ${ratioTop.current})`
        })

        photoWrap.addEventListener('transitionend', () => {
            photoWrap.style.transition = 'none'

            if(ratioTop.current === 0) {
                ratioTop.current = -selectedProduct.photos.length
                photoWrap.style.top = `calc(100% / 3 * ${ratioTop.current})`
            }

            if(ratioTop.current === - (selectedProduct.photos.length + 1)) {
                ratioTop.current = -1
                photoWrap.style.top = `calc(100% / 3 * -1)`
            }
        })
    }, [])

    return (
        <div className={cl.wrap}>
            <div
                id="topArrow"
                className={`${cl.arrowWrap} ${cl.topArrow}`}
                onClick={() => setActiveImgIndex(activeImgIndex ? activeImgIndex - 1 : selectedProduct.photos.length - 1)}
            >
                <img src={catalogImages.filterArrow} className={cl.arrow}/>
            </div>

            <div id="photoWrap" className={cl.photoWrap}>
                {selectedProduct.photos.map(photo =>
                    <img key={photo} src={photo} className={cl.sliderPhoto}/>
                )}
            </div>

            <img src={selectedProduct.photos[activeImgIndex]} className={cl.sliderPhoto}/>
            <img src={selectedProduct.photos[activeImgIndex]} className={cl.sliderPhoto}/>
            <img src={selectedProduct.photos[activeImgIndex]} className={cl.sliderPhoto}/>

            <div className={cl.whiteLayer}></div>

            <div
                id="bottomArrow"
                className={cl.arrowWrap}
                onClick={() => setActiveImgIndex(activeImgIndex === selectedProduct.photos.length - 1 ? 0 : activeImgIndex + 1)}
            >
                <img src={catalogImages.filterArrow} className={cl.arrow}/>
            </div>
        </div>
    );
};

export default ProductSlider