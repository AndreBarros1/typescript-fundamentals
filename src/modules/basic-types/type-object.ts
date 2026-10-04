let programmer = {
    name:"Eduardo",
    age: 30
}

programmer.name = "André"
programmer.age = 23

export function showProgrammer(programmer: {name: string, age: number}) {
    console.log(programmer)
}

showProgrammer(programmer) // passando o objeto
showProgrammer({name: "Eduardo", age: 30}) // passando um objeto literal