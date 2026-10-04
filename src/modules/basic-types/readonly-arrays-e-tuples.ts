// Readonly para Arrays
//let numbers: readonly (number)[] = [10, 20, 30, 40, 50]
//let numbers: ReadonlyArray<number> = [10, 20, 30, 40, 50] // Versão com interface

// Readonly para Tuplas
// No caso da tupla há a necessidade de definir o tipo de cada item em sua 
// respectiva posição, por exemplo o indice 0 deverá ser number, não string.
let numbers: readonly [number, number, number, number, number] = [10, 20, 30, 40, 50]

//numbers[0] = 30 // Com o readonly não sera possível modificar o array

//.map() - cria um novo array com as modificações aplicadas
// Oque permite fazer alteração no array original.
let numbersCopy = numbers.map((item) => item * 2) 

console.log(numbers)
console.log(numbersCopy)

export default () => {}