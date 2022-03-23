export const cardNumberPattern = (number: string): string => {
    let str: string = ''

    for(let i:number = 0; i < 16; i++) {
        i > 0 && i % 4 === 0 ? str += ' ' : str += ''
        number[i] ? str += number[i] : str += 'X'
    }

    return str
}