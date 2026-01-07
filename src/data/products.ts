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
    discountPrice?: number;
    image: string; // Ảnh đại diện chính
    images?: string[]; // Album ảnh (Mới thêm từ detail)
    category: 'dark' | 'milk' | 'nut' | 'fruit';
    isHot?: boolean;
    features?: ProductFeature[]; // Mới thêm từ detail
}
