import React, {FC} from 'react';
//@ts-ignore
import cl from './Size.module.css'

const Size: FC = () => {
    const sizeArray: string[] = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46']

    return (
        <div className={cl.wrap}>
            {
                sizeArray.map(size =>
                    <div key={size} className={cl.sizeWrap}>
                        <h3>{size}</h3>
                    </div>
                )
            }
        </div>
    );
};

export default Size