export const bootstrap = ():void => {
    const title = document.getElementById('title')
    const subtitle = document.getElementById('subtitle')

    // Leitura segura
    console.log('title: ', title?.innerText)
    console.log('subtitle: ', subtitle?.innerText)
    console.log('subtitle color: ', subtitle?.style.color)

    // Atribuição de valor, o optional chaining não vai servir
    if(subtitle) {
        subtitle.style.color = 'red'
    }

}