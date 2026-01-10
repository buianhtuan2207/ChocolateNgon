import { Product } from "../../data/products";
import { PromotionItem } from "../../data/promotions";
import FlashSale from "../../components/FlashSale/FlashSale";
import Banner from "../../components/Banner/Banner";
import PromotionCard from "../../components/PromotionCard/PromotionCard";
import "./promotion.scss";
import { useEffect, useState } from "react";
import Data from "../../data/db.json";

export default function Promotion() {
    const [promos, setPromos] = useState<PromotionItem[]>([]);
    const [saleProducts, setSaleProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            // 1. Lấy dữ liệu promotions
            const dataPromos = Data.promotions as PromotionItem[];

            // 2. Lấy dữ liệu products
            const dataProducts = Data.products as unknown as Product[];

            // 3. Lọc sản phẩm đang giảm giá
            const productsOnSale = dataProducts.filter((p) =>
                p.discountPrice && p.discountPrice < p.price
            );

            setPromos(dataPromos);
            setSaleProducts(productsOnSale);
        } catch (error) {
            console.error("Lỗi khi tải dữ liệu:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    if (loading) return <div className="text-center py-5">Đang tải chương trình ưu đãi...</div>;

    return (
        <div className="promotion-page">
            <Banner
                type="promotion"
                subtitle="CHƯƠNG TRÌNH ĐẶC BIỆT"
                title="Ngọt ngào mùa lễ hội"
                description="Giảm tới 30% cho bộ sưu tập Signature Dark Chocolate."
                buttonText="Khám phá ngay"
                buttonLink="/product"
                image="https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=2000"
            />

            <div className="container">
                <div className="mt-5">
                    <FlashSale data={saleProducts} />
                </div>

                <div className="promotion-list-section mt-5 pb-5">
                    <h2 className="promotion-section-title">Đang diễn ra</h2>
                    <div className="row g-4 mt-2">
                        {promos.map((item) => (
                            <div className="col-lg-4 col-md-6" key={item.id}>
                                <PromotionCard {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}