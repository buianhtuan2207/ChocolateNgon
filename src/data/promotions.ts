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

export const PROMOTIONS: PromotionItem[] = [
    {
        id: 1,
        tag: "HOT",
        tagType: "hot",
        title: "Mua 1 Tặng 1",
        description: "Áp dụng cho dòng sản phẩm Valentine Heart Box. Món quà ngọt ngào dành tặng người thương.",
        expiryDate: "15/02",
        image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop",
        buttonText: "CHI TIẾT",
        buttonLink: "/promotion/mua-1-tang-1"
    },
    {
        id: 2,
        tag: "FREESHIP",
        tagType: "freeship",
        title: "Miễn phí vận chuyển",
        description: "Freeship toàn quốc cho đơn hàng từ 500k. Nhập mã: CHOCOSHIP",
        expiryDate: "30/03",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
        buttonText: "Lưu mã",
        buttonLink: "#"
    },
    {
        id: 3,
        tag: "GIFT",
        tagType: "gift",
        title: "Quà tặng đặc biệt",
        description: "Tặng kèm bộ thiệp chúc mừng và túi xách cao cấp cho mọi đơn hàng Signature Edition..",
        expiryDate: "Dài hạn",
        image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop",
        buttonText: "NHẬP QUÀ NGAY",
        buttonLink: "/promotion/gift"
    }
];