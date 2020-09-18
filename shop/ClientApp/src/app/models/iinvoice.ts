export interface IInvoice{
    id: number,
    item: string 
    date: Date,
    quantity: number,
    paymentStatus: string,
    paymentMethos: string, 
    unitCost: number,
    amount: number,
    discount: number,
    totalAmount: number,
    userId: number
}