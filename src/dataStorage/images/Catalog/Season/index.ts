// @ts-ignore
import winter from './winter.png'
// @ts-ignore
import spring from './spring.png'
// @ts-ignore
import summer from './summer.png'
// @ts-ignore
import autumn from './autumn.png'

interface ISeasonImage {
    img: string,
    season: string
}

export const seasonImages: ISeasonImage[] = [
    {img: winter, season: 'winter'},
    {img: spring, season: 'spring'},
    {img: summer, season: 'summer'},
    {img: autumn, season: 'autumn'},
]