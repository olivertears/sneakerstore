import {sliderLeftLogoImages, sliderRightLogoImages} from "./logo";
import {sliderLeftBigImages, sliderRightBigImages} from "./big";
import {sliderLeftMiniImages, sliderRightMiniImages} from "./mini";

interface ISliderImages {
    logoLeft: string[][],
    logoRight: string[][],
    bigLeft: string[],
    bigRight: string[],
    miniLeft: string[][],
    miniRight: string[][],
}

export const sliderImages: ISliderImages = {
    logoLeft: sliderLeftLogoImages,
    logoRight: sliderRightLogoImages,
    bigLeft: sliderLeftBigImages,
    bigRight: sliderRightBigImages,
    miniLeft: sliderLeftMiniImages,
    miniRight: sliderRightMiniImages
}
