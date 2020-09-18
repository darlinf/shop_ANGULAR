import { IProduct } from "./iproduct";

export interface ICategory {
    id: number,
    nombre: string,
    status: string,
    image: string,
    products: IProduct[]
}