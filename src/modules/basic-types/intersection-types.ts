export const bootstrap = () => {

    type Person = {
        name: string,
        age: number
    }

    type Employee = {
        department: string
    }

    type Customer = {
        wishlist: string[]
    }

    type EmployeeDetails = Person & Employee

    type CustomerDetails = Person & Customer

    const employee: EmployeeDetails = {
        name: "Andre",
        age: 23,
        department: "TI"
    }

    const customer: CustomerDetails = {
        name: "Andre",
        age: 23,
        wishlist: ["Phone", "PC"]
    }

    console.log(employee)
    console.log(customer)
}
