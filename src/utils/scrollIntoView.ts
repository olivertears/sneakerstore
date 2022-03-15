export const scrollIntoView = (id: string) => {
    const element = document.getElementById(id) || {} as HTMLElement
    element.scrollIntoView()
}