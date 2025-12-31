// src/data/products.ts

// 1. Định nghĩa kiểu dữ liệu cho sản phẩm
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: 'dark' | 'milk' | 'nut' | 'fruit'; // Gợi ý các loại danh mục
    isHot?: boolean; // Đánh dấu sản phẩm nổi bật (tùy chọn)
    isWish?: boolean;
}

// 2. Danh sách sản phẩm (đã thêm ID và Category)
export const PRODUCTS: Product[] = [
    {
        id: 1,
        title: "Socola Đắng 70%",
        description: "Hương vị đậm đà, nguyên chất từ cacao.",
        price: 1200000,
        image: "/assets/img/category/ML.png",
        category: "dark",
        isHot: true, // Sản phẩm này sẽ hiện ở mục nổi bật
        isWish: true
    },
    {
        id: 2,
        title: "Socola Sữa",
        description: "Ngọt nhẹ, mịn và thơm béo.",
        price: 950000,
        image: "/assets/img/products/socola-vien.png",
        category: "milk",
        isWish: true
    },
    {
        id: 3,
        title: "Socola Hạnh Nhân",
        description: "Kết hợp cacao & hạnh nhân giòn rụm.",
        price: 1500000,
        image: "/assets/img/products/socola-hop.png",
        category: "nut",
        isHot: true
    },
    {
        id: 4,
        title: "Socola Đen Nguyên Chất",
        description: "Nguyên chất 100% cacao, vị mạnh và đậm đà.",
        price: 1800000,
        image: "/assets/img/products/socola-hop-2.png",
        category: "dark",
        isHot: true
    },
    {
        id: 5,
        title: "Socola Đắng 70% (Hộp nhỏ)",
        description: "Hương vị đậm đà, nguyên chất từ cacao.",
        price: 1200000,
        image: "/assets/img/category/ML.png",
        category: "dark",
        isWish: true
    },
    {
        id: 6,
        title: "Socola Sữa Cao Cấp",
        description: "Ngọt nhẹ, mịn và thơm béo.",
        price: 950000,
        image: "/assets/img/products/socola-vien.png",
        category: "milk"
    },
    {
        id: 7,
        title: "Socola Hạnh Nhân Đặc Biệt",
        description: "Kết hợp cacao & hạnh nhân giòn rụm.",
        price: 1500000,
        image: "/assets/img/products/socola-hop.png",
        category: "nut"
    },
    {
        id: 8,
        title: "Socola Đen Thượng Hạng",
        description: "Nguyên chất 100% cacao, vị mạnh và đậm đà.",
        price: 1800000,
        image: "/assets/img/products/socola-hop-2.png",
        category: "dark"
    },
];