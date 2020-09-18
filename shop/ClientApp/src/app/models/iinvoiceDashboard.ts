export interface IInvoiceDashboard{
    id: number,
    date: Date,
    totalAmount: number,
    paymentStatus: string,
    paymentMethos: string,
    nameCustomer: string
}