// @ts-ignore
import linkedin from './linkedin.png'
// @ts-ignore
import telegram from './telegram.png'
// @ts-ignore
import github from './github.png'

interface IFooterImages {
    github: string,
    linkedin: string,
    telegram: string,
}

export const footerImages: IFooterImages = {
    github: telegram,
    linkedin: linkedin,
    telegram: telegram
}