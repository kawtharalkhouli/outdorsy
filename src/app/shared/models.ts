export interface Product{
    id: number,
    product: string;
    stockAvailability: string,
    price: number;
    initialQuantity : number,
    checked?: boolean
}