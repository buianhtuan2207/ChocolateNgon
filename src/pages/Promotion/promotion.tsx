import { PRODUCTS } from "../../data/products";
import { PROMOTIONS } from "../../data/promotions"; // Thêm dòng này
import FlashSale from "../../components/FlashSale/FlashSale";
import Banner from "../../components/Banner/Banner";
import PromotionCard from "../../components/PromotionCard/PromotionCard";
import "./promotion.scss";

export default function Promotion() {
    const saleItems = PRODUCTS.filter(p => p.discountPrice).slice(0, 12);

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
                    <FlashSale data={saleItems} />
                </div>

                <div className="promotion-list-section mt-5 pb-5">
                    <h2 className="promotion-section-title">Đang diễn ra</h2>
                    <div className="row g-4 mt-2">
                        {PROMOTIONS.map((item) => (
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