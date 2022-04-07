import React, {FC, ReactElement, useState} from 'react';
//@ts-ignore
import cl from './Section.module.css'
import {catalogImages} from "../../../../dataStorage/images/Catalog";

interface ISectionProps {
    sectionName: string,
    component: ReactElement
}

const Section: FC<ISectionProps> = ({sectionName, component}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div>
            <div
                className={`${cl.sectionHeader} ${isOpen && cl.openSection}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2>{sectionName}</h2>
                <img
                    className={`${cl.arrow} ${isOpen && cl.mirrorArrow}`}
                    src={catalogImages.filterArrow}
                />
            </div>
            <div className={`${cl.sectionContent} ${isOpen || cl.hideSectionContent}`}>
                {component}
            </div>
        </div>
    );
};

export default Section