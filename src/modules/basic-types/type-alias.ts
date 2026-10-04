type Salary = number | string

type Programmer = {
    name: string, 
    age: number,
    skills?: string[],
    contact: {email: string, phone: string},
    salary?: Salary 
    }

export function showProgrammer(programmer: Programmer) {
    console.log(programmer)
}

showProgrammer({
    name: "Eduardo",
    age: 30,
    contact: {
        email: "a@b.com",
        phone: "123456789"
    },
    salary: "R$1000"
}) // passando um objeto literal