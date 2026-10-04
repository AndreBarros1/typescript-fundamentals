// TODO CartItem
type CartItem = {
    id:number,
    price:number
}

// TODO ShoppingCart
type ShoppingCart = {
    cartItems: CartItem[]
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

// TODO função do tipo void para somar valores do itens
export function calculateTotal(shoppingCart: ShoppingCart): void {
    const total = shoppingCart.cartItems.reduce((acc, item) => acc + item.price, 0)
    console.log(`Total do carrinho: R$ ${total.toFixed(2)}`)
}

calculateTotal(shoppingCart)