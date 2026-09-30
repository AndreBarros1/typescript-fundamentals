export const bootstrap = ():void => {
    const input = document.querySelector('.inputText') as HTMLInputElement

    input.addEventListener('click', (e: Event) => {
        console.log('Input clicado')
    })

    console.log('Filho de: ', input.parentNode)
    console.log('Element: ', input.id, input.className, input.tagName)
    console.log('Arrástavel: ', input.draggable)
    console.log('Input: ', input.value)
}