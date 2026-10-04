//let filmes = ['Avatar', 'Star Wars', 'Matrix'];
let filmes: string[] = ['Avatar', 'Star Wars', 'Matrix'];
let numbers: number[] = [1, 2, 3];

export function toUpperCaseStrings(arr: string[]) {
    return arr.map(value => value.toUpperCase());
}

console.log(toUpperCaseStrings(filmes))