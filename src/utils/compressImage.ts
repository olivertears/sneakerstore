export const compressImage = (imgUrl: string): string => {
    const canvas = document.createElement('canvas')
    const img = document.createElement('img')

    img.src = imgUrl

    img.onload = () => {
        let width = img.width
        let height = img.height
        const maxWidth = 300
        const maxHeight = 300

        if (width > height){
            if (width > maxWidth) {
                height = Math.floor(height *= maxWidth / width)
                width = maxWidth
            }
        } else {
            if(height > maxHeight) {
                width = Math.floor(width *= maxHeight / height)
                height = maxHeight
            }
        }

        canvas.width = width
        canvas.height = height

        const ctx = canvas.getContext('2d')
        // @ts-ignore
        ctx.drawImage(img, 0, 0, width, height)

        let compressedImgUrl = canvas.toDataURL('image/jpeg', 0.7)

    }
    return ''
}