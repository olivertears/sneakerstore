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
import {useTypedSelector} from "../../../../../hooks/useTypedSelector";

interface IPriceProps {
    min: number;
    max: number;
}

const Price: FC<IPriceProps> = ({min, max}) => {
    const {currency} = useTypedSelector(state => state.app)

    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMinVal(Math.floor(min))
        setMaxVal(Math.ceil(max))
    }, [currency])

    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value);

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent, currency]);

    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent, currency]);

    return (
        <div className={cl.container}>
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                ref={minValRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(+event.target.value, maxVal - 1);
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
                    const value = Math.max(+event.target.value, minVal + 1);
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
