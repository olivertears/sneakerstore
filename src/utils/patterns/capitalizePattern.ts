export const capitalizePattern = (word: string): string => {
    if (word) return word.trim().replace(/  +/g, ' ').toLowerCase().split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
    return ''
}
