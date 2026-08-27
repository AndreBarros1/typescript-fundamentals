export const bootstrap = (): void => {
    enum OrderStatus {
        PENDING, // default = 0 e vai incrementando conforme os atributos (0, 1, 2...)
        SHIPPED = "Enviado",
        DELIVERED = "Entregue"
    }

    console.log(OrderStatus)
    console.log(OrderStatus.DELIVERED)
    console.log(OrderStatus.SHIPPED)

    enum OrderStatus {
        CANCELLED = 500,
        WAITINGFORPAYMENT = "Aguardando pagamento"
    }


    function changeOrderStatus(newStatus: OrderStatus): void {
        if(newStatus === OrderStatus.DELIVERED) {
            console.log("Enviado")
        }
    }

    changeOrderStatus(OrderStatus.DELIVERED)
}