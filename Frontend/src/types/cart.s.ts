import { Product } from "./product";


export interface Category {
    id: number;
    title: string;
}

export interface ProductWithCat extends Product {
    category: Category
}

export interface CartItem {
    id: number;
    product: ProductWithCat;
    quantity: number;
}
// Example: Cart
export interface CartP {
    id: number;
    user: number;
    items: CartItem[];
    created_at: string; // ISO date string
}