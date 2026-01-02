
export interface ProductFeature {
    icon: string;
    title: string;
    desc: string;
}

export interface Product {
    id: number;
    title: string;
    subtitle?: string; // Mới thêm từ detail
    description: string;
    price: number;
    image: string; // Ảnh đại diện chính
    images?: string[]; // Album ảnh (Mới thêm từ detail)
    category: 'dark' | 'milk' | 'nut' | 'fruit';
    isHot?: boolean;
    features?: ProductFeature[]; // Mới thêm từ detail
}

// Helper để tạo features mặc định cho nhanh
const defaultFeatures: ProductFeature[] = [
    { icon: "🌿", title: "100% Tự nhiên", desc: "Không chất bảo quản" },
    { icon: "🇻🇳", title: "Xuất xứ Việt Nam", desc: "Hạt cacao Tiền Giang" },
    { icon: "🎁", title: "Thiết kế sang trọng", desc: "Thích hợp làm quà tặng" }
];

export const PRODUCTS: Product[] = [
    // --- TRANG 1 ---
    {
        id: 1,
        title: "Socola Đắng 70%",
        subtitle: "Signature Edition",
        description: "Hương vị đậm đà, nguyên chất từ cacao thượng hạng.",
        price: 1200000,
        image: "/assets/img/category/ML.png",
        images: ["/assets/img/category/ML.png", "/assets/img/products/socola-vien.png"],
        category: "dark",
        isHot: true,
        features: defaultFeatures
    },
    {
        id: 2,
        title: "Socola Sữa Truyền Thống",
        subtitle: "Sweet & Creamy",
        description: "Ngọt nhẹ, mịn màng và thơm béo mùi sữa tươi.",
        price: 950000,
        image: "/assets/img/products/socola-vien.png",
        images: ["/assets/img/products/socola-vien.png", "/assets/img/category/ML.png"],
        category: "milk",
        features: defaultFeatures
    },
    {
        id: 3,
        title: "Socola Hạnh Nhân Rang",
        subtitle: "Crunchy Nut",
        description: "Sự kết hợp hoàn hảo giữa socola đen và hạnh nhân giòn rụm.",
        price: 1500000,
        image: "/assets/img/products/socola-hop.png",
        category: "nut",
        isHot: true,
        features: defaultFeatures
    },
    {
        id: 4,
        title: "Socola Đen 100% Nguyên Chất",
        subtitle: "Zero Sugar",
        description: "Vị đắng mạnh mẽ dành cho người sành ăn, không đường.",
        price: 1800000,
        image: "/assets/img/products/socola-hop-2.png",
        category: "dark",
        isHot: true,
        features: defaultFeatures
    },
    {
        id: 5,
        title: "Socola Nhân Mắc Ca",
        subtitle: "Macadamia Deluxe",
        description: "Hạt mắc ca béo ngậy phủ lớp socola sữa ngọt ngào.",
        price: 1350000,
        image: "/assets/img/category/NBC.png",
        category: "nut",
        features: defaultFeatures
    },
    {
        id: 6,
        title: "Socola Trà Xanh Matcha",
        subtitle: "Japanese Style",
        description: "Hương vị thanh mát từ bột Matcha Nhật Bản cao cấp.",
        price: 1100000,
        image: "/assets/img/category/PTP.png",
        category: "milk",
        features: defaultFeatures
    },

    // --- TRANG 2 ---
    {
        id: 7,
        title: "Socola Trái Cây Nhiệt Đới",
        subtitle: "Tropical Fruits",
        description: "Nhân xoài và chanh dây chua ngọt kích thích vị giác.",
        price: 1250000,
        image: "/assets/img/category/classic.png",
        category: "fruit",
        isHot: true,
        features: defaultFeatures
    },
    {
        id: 8,
        title: "Socola Đắng 85%",
        subtitle: "Intense Dark",
        description: "Ít ngọt, tốt cho sức khỏe tim mạch.",
        price: 1400000,
        image: "/assets/img/category/ML.png",
        category: "dark",
        features: defaultFeatures
    },
    {
        id: 9,
        title: "Socola Sữa Hạt Dẻ",
        subtitle: "Hazelnut Cream",
        description: "Nhân kem hạt dẻ béo ngậy tan chảy.",
        price: 980000,
        image: "/assets/img/products/socola-vien.png",
        category: "nut",
        features: defaultFeatures
    },
    {
        id: 10,
        title: "Socola Rượu Rum",
        subtitle: "Rum & Raisin",
        description: "Hương vị nồng nàn của rượu Rum và nho khô.",
        price: 1600000,
        image: "/assets/img/products/socola-hop.png",
        category: "fruit",
        isHot: true,
        features: defaultFeatures
    },
    {
        id: 11,
        title: "Socola Trắng Vani",
        subtitle: "White Vanilla",
        description: "Ngọt ngào, thơm lừng hương Vani tự nhiên.",
        price: 900000,
        image: "/assets/img/category/NBC.png",
        category: "milk",
        features: defaultFeatures
    },
    {
        id: 12,
        title: "Hộp Quà Valentine",
        subtitle: "Limited Edition",
        description: "Thiết kế trái tim, tổng hợp 12 vị socola ngon nhất.",
        price: 2500000,
        image: "/assets/img/products/socola-hop-2.png",
        category: "dark",
        isHot: true,
        features: defaultFeatures
    },

    // --- TRANG 3 ---
    {
        id: 13,
        title: "Socola Bạc Hà",
        subtitle: "Cool Mint",
        description: "Sảng khoái với lớp nhân bạc hà mát lạnh.",
        price: 1050000,
        image: "/assets/img/category/PTP.png",
        category: "milk",
        features: defaultFeatures
    },
    {
        id: 14,
        title: "Socola Cam Tươi",
        subtitle: "Orange Dark",
        description: "Vỏ cam sấy dẻo nhúng socola đen đắng nhẹ.",
        price: 1300000,
        image: "/assets/img/category/classic.png",
        category: "fruit",
        features: defaultFeatures
    },
    {
        id: 15,
        title: "Socola Muối Biển",
        subtitle: "Sea Salt Caramel",
        description: "Vị mặn nhẹ của muối biển làm nổi bật vị ngọt caramel.",
        price: 1150000,
        image: "/assets/img/category/ML.png",
        category: "milk",
        isHot: true,
        features: defaultFeatures
    },
    {
        id: 16,
        title: "Thanh Năng Lượng Cacao",
        subtitle: "Energy Bar",
        description: "Giàu Protein, thích hợp cho người tập gym.",
        price: 850000,
        image: "/assets/img/category/NBC.png",
        category: "nut",
        features: defaultFeatures
    }
];