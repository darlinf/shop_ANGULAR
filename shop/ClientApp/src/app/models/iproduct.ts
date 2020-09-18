export interface IProduct {
    id: number,
    name: string,
    price: number,
    image: string,
    stock: number,
    categoryId: number,
    
    addToCart: boolean,
    total: number,
    quantity: number
}
