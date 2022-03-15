import React, {FC} from 'react';
import Slider from "../components/Main/Slider/Slider";
import Advantages from "../components/Main/Advantages/Advantages";

const Main: FC = () => {
    return (
        <div>
            <Slider/>
            <Advantages/>
        </div>
    );
};

export default Main