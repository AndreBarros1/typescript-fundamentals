// Deve ser evitado ao máximo, tipo Any não é recomendado. Ele acaba tirando a caracteristica de tipagem
// estática, é mais ou menos como blindar um carro e depois sempre andar com os vidros abaixados

export function handleFileUpload(file: any) {
    console.log(`Nome: ${file.name}`)
    console.log(`Nome: ${file.size}`)
}

const file = {name: 'Arquivo 1.txt'}
handleFileUpload(file)






