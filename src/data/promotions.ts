export interface PromotionItem {
    id: number;
    tag: string;
    tagType: 'hot' | 'freeship' | 'gift';
    title: string;
    description: string;
    expiryDate: string;
    image: string;
    buttonText: string;
    buttonLink: string;
}
