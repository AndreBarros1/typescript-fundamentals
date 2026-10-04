// TODO CartItem
type CartItem = {
    id:number,
    price:number
}

// TODO ShoppingCart
type ShoppingCart = {
    cartItems: CartItem[]
}

// TODO Address
type Address = {
    cep:string,
    default:boolean
}

// TODO Customer
type Customer = {
   addresses: Address[]
}

/* -------------------------------------------------------------------- */

const addresses: Address[] = [
    {
        cep: '12345678',
        default: true
    },
    {
        cep: '87654321',
        default: false
    },
    {
        cep: '87654321',
        default: false
    }
]

const customer: Customer = {
    addresses: addresses 
}

// TODO criar variável do tipo ShoppingCart contendo CartItem
const shoppingCart: ShoppingCart = {
    cartItems: [
        {
            id: 1,
            price: 10
        },
        {
            id: 2,
            price: 20
        },
        {
            id: 3,
            price: 30
        }
    ]
}

/* -------------------------------------------------------------------- */

type ApplyDiscountFn = (total: number, discount: number) => number

const applyDiscount: ApplyDiscountFn = (total: number, discount: number): number => {
    return total - total * discount
}

type CalculateTotalFn = (sC: ShoppingCart, callback: ApplyDiscountFn) => number

let calculateTotal: CalculateTotalFn = function (shoppingCart: ShoppingCart, applyDiscount: ApplyDiscountFn): number {
    const total = shoppingCart.cartItems.reduce((acc, item) => acc + item.price, 0)
    return applyDiscount(total, 0.10)
}


let getPrincipalAddress: (c: Customer) => Address | undefined

getPrincipalAddress = function (customer: Customer): Address | undefined {
    return customer.addresses.find(address => address.default)
}


const total = calculateTotal(shoppingCart, applyDiscount)

console.log(`Total do carrinho: R$ ${total.toFixed(2)}`)

const principalAddress = getPrincipalAddress(customer)

console.log(principalAddress)

export { getPrincipalAddress, calculateTotal }