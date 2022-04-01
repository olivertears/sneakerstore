export const deleteSpaces = (stringWithSpaces: string): string => {
    return stringWithSpaces.split(' ').join('')
}