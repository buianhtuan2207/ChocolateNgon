import { Product } from "../../data/products";
import { PromotionItem } from "../../data/promotions";
import FlashSale from "../../components/FlashSale/FlashSale";
import Banner from "../../components/Banner/Banner";
import PromotionCard from "../../components/PromotionCard/PromotionCard";
import "./promotion.scss";
import { useEffect, useState } from "react";

export default function Promotion() {
    // 1. Khai báo state để chứa dữ liệu từ API
    const [promos, setPromos] = useState<PromotionItem[]>([]);
    const [saleProducts, setSaleProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPromotionData = async () => {
            try {
                const [resPromos, resProducts] = await Promise.all([
                    fetch("http://localhost:5000/promotions"),
                    fetch("http://localhost:5000/products") // Lấy hết sản phẩm
                ]);

                const dataPromos = await resPromos.json();
                const dataProducts = await resProducts.json();

                // Lọc tại đây: Chỉ lấy sản phẩm có discountPrice và giá đó phải nhỏ hơn giá gốc
                const productsOnSale = dataProducts.filter((p: Product) =>
                    p.discountPrice && p.discountPrice < p.price && true
                );

                setPromos(dataPromos);
                setSaleProducts(productsOnSale);
            } catch (error) {
                console.error("Lỗi khi tải dữ liệu:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPromotionData();
    }, []);
    if (loading) return <div className="text-center py-5">Đang tải chương trình ưu đãi...</div>;
    return (
        <div className="promotion-page">
            <Banner
                type="promotion"
                subtitle="CHƯƠNG TRÌNH ĐẶC BIỆT"
                title="Ngọt ngào mùa lễ hội"
                description="Giảm tới 30% cho bộ sưu tập Signature Dark Chocolate. Hương vị tinh tế cho những khoảnh khắc đáng nhớ."
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