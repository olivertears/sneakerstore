// @ts-ignore
import adidas from './adidas.png'
// @ts-ignore
import asics from './asics.png'
// @ts-ignore
import converse from './converse.png'
// @ts-ignore
import jordan from './jordan.png'
// @ts-ignore
import nike from './nike.png'
// @ts-ignore
import puma from './puma.png'
// @ts-ignore
import underArmour from './underArmour.png'
// @ts-ignore
import vans from './vans.png'

interface IBrandImage {
    img: string,
    brand: string
}

export const brandImages: IBrandImage[] = [
    {img: adidas, brand: 'adidas'},
    {img: asics, brand: 'asics'},
    {img: converse, brand: 'converse'},
    {img: jordan, brand: 'jordan'},
    {img: nike, brand: 'nike'},
    {img: puma, brand: 'puma'},
    {img: underArmour, brand: 'underArmour'},
    {img: vans, brand: 'vans'},
]