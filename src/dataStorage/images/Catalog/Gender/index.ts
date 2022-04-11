// @ts-ignore
import man from './man.png'
// @ts-ignore
import woman from './woman.png'
// @ts-ignore
import unisex from './unisex.png'
// @ts-ignore
import children from './children.png'

interface IGenderImg {
    img: string,
    sex: string
}

export const genderImages: IGenderImg[] = [
    {img: man, sex: 'man'},
    {img: woman, sex: 'woman'},
    {img: unisex, sex: 'unisex'},
    {img: children, sex: 'children'}
]