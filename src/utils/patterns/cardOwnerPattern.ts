export const cardOwnerPattern = (owner: string): string => {
    return owner.trim().replace(/  +/g, ' ').toUpperCase()
}