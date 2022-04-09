import {IProduct} from "./models/IProduct";
import gender from "./components/Catalog/Filter/Sections/Gender/Gender";

export interface VadyaFilter {
    sort: string,
    price: number[],
    gender: string[],
    brand: string[],
    size: number[],
    color: string[],
    season: string[],
}

const VadyaFilterExample: VadyaFilter = {
    sort: 'price ↑',
    price: [0, 300],
    gender: ['man', 'children'],
    brand: ['nike', 'adidas'],
    size: [43],
    color: ['black', 'white'],
    season: ['summer']
}

const fakeProductArr: IProduct[] = [] as IProduct[]

fakeProductArr.filter(product => product.price >= VadyaFilterExample.price[0] && product.price <= VadyaFilterExample.price[1]
    && VadyaFilterExample.gender.forEach(gender => product.sex.includes(gender))
    && VadyaFilterExample.brand.forEach(brand => product.brand.includes(brand)))