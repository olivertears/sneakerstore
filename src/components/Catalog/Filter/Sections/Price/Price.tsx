import {
    ChangeEvent,
    FC,
    useCallback,
    useEffect,
    useState,
    useRef
} from "react";
//@ts-ignore
import cl from "./Price.module.css";

interface IPriceProps {
    min: number;
    max: number;
}

const Price: FC<IPriceProps> = ({min, max}) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value);

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    return (
        <div className={cl.container}>
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                ref={minValRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(+event.target.value, maxVal);
                    setMinVal(value);
                    event.target.value = value.toString();
                }}
                className={`${cl.thumb} ${cl.thumbZIndex3} ${minVal > max - 100 && cl.thumbZIndex5}`}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                ref={maxValRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.max(+event.target.value, minVal);
                    setMaxVal(value);
                    event.target.value = value.toString();
                }}
                className={`${cl.thumb} ${cl.thumbZIndex4}`}
            />

            <div className={cl.slider}>
                <div className={cl.sliderTrack}/>
                <div ref={range} className={cl.sliderRange}/>
                <div className={cl.sliderLeftValue}>{minVal}</div>
                <div className={cl.sliderRightValue}>{maxVal}</div>
            </div>
        </div>
    );
};

export default Price;
