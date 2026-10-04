
// Type annotation
//let product: string = 'Churrasqueira Controle Remoto';
//let number: number = 650

// Type inference
let product = 'Churrasqueira Controle Remoto';
let price = 650

// Sempre que o type inference for possível, não utilizar o type annotation
// Assim deixando o código mais armonico e legivel

//type inference é a inferencia de tipo de uma variavel de acordo com o valor atribuido a ela
// let product = 'Churrasqueira Controle Remoto'; - vai ser inferido como string

//type annotation é a prática de determinar o tipo de uma variável de acordo com o valor que desejamos atribuir
// let product: string = 'Churrasqueira Controle Remoto';

// product.toUpperCase();
// price.toFixed(0);

export function display(product: string, price: number) {
    console.log(product, price)
}

display(product, price)