import React, {FC} from 'react';
import '../css/CatalogLoader.css'


const CatalogLoader: FC = () => {
    return (
        <div className='catalogLoaderWrap'>
            <div className="lds-grid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default CatalogLoader