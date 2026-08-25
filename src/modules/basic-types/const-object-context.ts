/* const file = {
    name: 'Arquivo 1.txt',
    size: 1213249
} as const
*/

type File = {
    readonly name: string,
    size: number
}

const file: File = {
    name: 'Arquivo 1.txt',
    size: 1213249
}

//file.name = "Lista_de_dependentes.txt"

export function handleFileUpload(file: File) {
    console.log(`Nome: ${file.name}`)
    console.log(`Nome: ${file.size}`)
}


handleFileUpload(file)
