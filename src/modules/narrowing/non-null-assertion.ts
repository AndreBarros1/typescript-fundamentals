export const bootstrap = ():void => {
    const subtitle = document.getElementById('subtitle')!
    subtitle.style.color = 'green'

    // if(subtitle) {
    //        subtitle.style.color = 'green'
    // }
 
    const getProducts = (): string[] | null => {
        return ['Smartphone', 'Headset']
    }

    // define que a atribuição não será de um valor null ou undefined atraves do operador !
    const products = getProducts()!

    products.map((item) => console.log(item))
}