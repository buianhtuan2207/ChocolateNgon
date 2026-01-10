// data/cart.ts

export interface CartItemType {
    id: number;
    productId: number;
    title: string;
    subtitle?: string;
    image: string;
    price: number;
    quantity: number;
    isSelected: boolean;
}

export const MOCK_CART_DATA: CartItemType[] = [

];