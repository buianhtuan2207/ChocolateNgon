export interface ProductFeature {
    icon: string;
    title: string;
    desc: string;
}

// 1. Thêm định nghĩa cho Highlight
export interface ProductHighlight {
    img: string;
    title: string;
    desc: string;
}

export interface Product {
    id: number;
    title: string;
    subtitle?: string;
    description: string;
    price: number;
    discountPrice?: number;
    image: string;
    images?: string[];
    category: 'dark' | 'milk' | 'nut' | 'fruit';
    isHot?: boolean;
    rating?: number;       // Thêm rating
    reviewCount?: number;  // Thêm reviewCount
    features?: ProductFeature[];
    highlights?: ProductHighlight[]; // 2. Thêm trường highlights vào Product
}