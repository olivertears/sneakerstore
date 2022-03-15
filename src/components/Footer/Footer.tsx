import React, {FC} from 'react';
import {footerImages} from "../../dataStorage/images/Footer";
// @ts-ignore
import cl from './Footer.module.css'

const Footer: FC = () => {
    return (
        <div className={cl.wrap}>
            <div className={cl.wrapOnePart}>
                <h1>FrontEnd</h1>
                <h4>React, TypeScript, Redux</h4>
                <h1>Vitaly Olkhov</h1>
                <h4>+375 29 173 9141</h4>
                <h4>olivertears@gmail.com</h4>
                <div className={cl.socialNetworks}>
                    <a target='_blank' href='https://github.com/olivertears'>
                        <img className={cl.imgLink} src={footerImages.github}/>
                    </a>
                    <a target='_blank' href='https://www.linkedin.com/in/oliver-tears-806959233/'>
                        <img className={cl.imgLink} src={footerImages.linkedin}/>
                    </a>
                    <a target='_blank' href='https://t.me/vitalyableat'>
                        <img className={cl.imgLink} src={footerImages.telegram}/>
                    </a>
                </div>
            </div>
            <div className={cl.wrapOnePart}>
                <h1>BackEnd</h1>
                <h4>React, TypeScript, Redux</h4>
                <h1>Vadim Belyaev</h1>
                <h4>+375 44 478 1156</h4>
                <h4>vadimbelaev002@gmail.com</h4>
                <div className={cl.socialNetworks}>
                    <a target='_blank' href='https://github.com/VadimBelyaev02'>
                        <img src={footerImages.github} className={cl.imgLink} />
                    </a>
                    <a target='_blank' href='https://www.linkedin.com/in/vadim-belyaev-273a87211/'>
                        <img src={footerImages.linkedin} className={cl.imgLink}/>
                    </a>
                    <a target='_blank' href='https://t.me/vadim060902'>
                        <img src={footerImages.telegram} className={cl.imgLink}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer