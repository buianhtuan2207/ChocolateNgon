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
    {
        id: 1,
        productId: 101,
        title: "Hộp Truffle Hoàng Gia",
        subtitle: "Hộp 16 viên • Dark 70%",
        image: "/assets/img/products/socola-hop-2.png",
        price: 850000,
        quantity: 1,
        isSelected: true,
    },
    {
        id: 2,
        productId: 102,
        title: "Dark Chocolate 85% Bar",
        subtitle: "Single Origin • 100g",
        image: "/assets/img/category/classic.png",
        price: 120000,
        quantity: 2,
        isSelected: true,
    },
    {
        id: 3,
        productId: 103,
        title: "Valentine Gift Set",
        subtitle: "Phiên bản giới hạn",
        image: "/assets/img/category/NBC.png",
        price: 550000,
        quantity: 1,
        isSelected: true,
    }
];