export const bootstrap = (): void => {
    // Null
    let title = null
    console.log('Title', title)
    console.log('Title (if)' ,title ? 'verdadeiro' : 'falso')
    console.log('Tipo null: ', typeof title) // bug -> retorna um objeto


    // Undefined
    let subtitle = undefined
    console.log('Subtitle', subtitle)
    console.log('Subtitle (if)' ,subtitle ? 'verdadeiro' : 'falso')
    console.log('Tipo undefined: ', typeof subtitle)

    type Page = {
        title: string,
        subtitle?: string,
        handlerPage?: () => void
    }

    const page: Page = {
        title: 'TypeScript',
    }

    page.handlerPage = (): void => {
        console.log("Executou a função")
    }


    console.log('Page subtitle', page.subtitle) // Retorna undefined por não ter sido definido
    console.log('Page handlerPage', page.handlerPage) // Retorna undefined por não ter sido definido
    console.log('Page handlerPage', page.handlerPage())


}