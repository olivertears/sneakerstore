import React, {FC} from 'react';
//@ts-ignore
import cl from './Color.module.css'

const Color: FC = () => {
    const colorArray: string[] = ['black', 'white', 'red', 'pink', 'blue', 'lightskyblue', 'yellow', 'orange', 'green', 'brown', 'gray', 'purple']

    return (
        <div className={cl.wrap}>
            {
                colorArray.map(color =>
                    <div key={color} className={cl.colorWrap}>
                        <div
                            className={cl.color}
                            style={{background: color}}
                        />
                    </div>
                )
            }
        </div>
    );
};

export default Color