// src/data/productDetails.ts

import { PRODUCTS } from "./products";


export interface ProductDetail {
    id: number;
    subtitle?: string;
    images: string[];
    features: {
        icon: string;
        title: string;
        desc: string;
    }[];
}

export const PRODUCT_DETAILS: ProductDetail[] = [
    {
        id: 1,
        subtitle: "Original Bar",
        images: [
            "/assets/img/category/ML.png",
            "/assets/img/products/socola-vien.png",
            "/assets/img/products/socola-hop.png",
            "/assets/img/products/socola-hop-2.png"
        ],
        features: [
            {
                icon: "🌿",
                title: "100% Tự nhiên",
                desc: "Không chất bảo quản hay phụ gia nhân tạo"
            },
            {
                icon: "✋",
                title: "Thủ công truyền thống",
                desc: "Làm thủ công từ hạt ca cao Việt Nam"
            },
            {
                icon: "🇻🇳",
                title: "Nguồn gốc rõ ràng",
                desc: "Hợp tác trực tiếp với nông dân địa phương"
            }
        ]
    },
    {
        id: 2,
        subtitle: "Best Seller",
        images: [
            "/assets/img/products/socola-vien.png",
            "/assets/img/category/ML.png",
            "/assets/img/products/socola-hop.png"
        ],
        features: [
            { icon: "🥛", title: "Sữa tươi nguyên chất", desc: "Thơm béo tự nhiên" },
            { icon: "❤️", title: "Dành cho mọi lứa tuổi", desc: "Vị ngọt dịu nhẹ" },
            { icon: "⭐", title: "Bán chạy nhất", desc: "Sản phẩm được yêu thích nhất" }
        ]
    },
    {
        id: 3,
        images: [
            "/assets/img/products/socola-hop.png",
            "/assets/img/products/socola-hop-2.png",
            "/assets/img/category/ML.png"
        ],
        features: [
            { icon: "🌰", title: "Hạnh nhân giòn tan", desc: "Nguyên hạt, thơm ngon" },
            { icon: "⚡", title: "Năng lượng dồi dào", desc: "Bổ sung protein tự nhiên" },
            { icon: "🎁", title: "Quà tặng hoàn hảo", desc: "Thiết kế hộp sang trọng" }
        ]
    },
    {
        id: 4,
        subtitle: "Premium Edition",
        images: [
            "/assets/img/products/socola-hop-2.png",
            "/assets/img/products/socola-hop.png"
        ],
        features: [
            { icon: "🔥", title: "100% Cacao", desc: "Không đường, không sữa" },
            { icon: "🛡️", title: "Tốt cho sức khỏe", desc: "Giàu chất chống oxy hóa" },
            { icon: "👑", title: "Thượng hạng", desc: "Dành cho tín đồ socola đen" }
        ]
    }
];