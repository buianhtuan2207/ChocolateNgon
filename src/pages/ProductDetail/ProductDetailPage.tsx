import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../data/products";
import { PRODUCT_DETAILS, ProductDetail } from "../../data/productDetails";
import Button from "../../components/Button/Button";
import FeaturedProducts from "../../components/FeatureProducts/FeaturedProducts";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
import "./productDetail.scss";

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const productId = Number(id);

    const baseProduct = PRODUCTS.find(p => p.id === productId);
    const detail: ProductDetail | undefined = PRODUCT_DETAILS.find(d => d.id === productId);

    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState<string>("");

    useEffect(() => {
        if (detail?.images && detail.images.length > 0) {
            setMainImage(detail.images[0]);
        } else if (baseProduct?.image) {
            setMainImage(baseProduct.image);
        }
    }, [detail, baseProduct]);

    if (!baseProduct) {
        return <div className="text-center py-32 text-2xl text-gray-600">Không tìm thấy sản phẩm</div>;
    }

    const title = baseProduct.title;
    const description = baseProduct.description;
    const price = baseProduct.price;
    const fallbackImage = baseProduct.image;

    const subtitle = detail?.subtitle;
    const images: string[] = detail?.images || [fallbackImage];
    const features = detail?.features || [];

    const handleAddToCart = () => {
        console.log(`Đã thêm ${quantity} x "${title}" vào giỏ hàng`);
    };

    return (
        <div className="product-detail-page">
            <div className="product-detail-container">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <span>Trang chủ</span> / <span>Dark Chocolate</span> / <span className="current">{title} {subtitle}</span>
                </div>

                <div className="product-detail-main">
                    {/* Left: Gallery */}
                    <div className="product-gallery">
                        <div className="main-image-wrapper">
                            <img src={mainImage} alt={title} className="main-image" />
                            <div className="collection-badge">Signature Collection</div>
                        </div>

                        <div className="thumbnail-list">
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`thumbnail-item ${mainImage === img ? "active" : ""}`}
                                    onClick={() => setMainImage(img)}
                                >
                                    <img src={img} alt={`Thumbnail ${idx + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="product-info">
                        <h1 className="product-title">
                            {title} <span className="subtitle">{subtitle}</span>
                        </h1>

                        <div className="product-rating">
                            {/* Bạn có thể thêm rating sao thật sau */}
                            <span>★★★★★</span> <span className="review-count">138 đánh giá</span> <span className="category-tag">CỔ ĐIỂN</span>
                        </div>

                        <p className="product-description">{description}</p>

                        <div className="product-price-section">
                            <div className="price-wrapper">
                                <span className="current-price">{price.toLocaleString("vi-VN")}đ</span>
                                <span className="old-price">150.000đ</span>
                                <span className="discount">-20%</span>
                            </div>
                        </div>

                        <div className="purchase-section">
                            <div className="quantity-wrapper">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="quantity-btn">-</button>
                                <span className="quantity">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="quantity-btn">+</button>
                            </div>

                            <Button
                                className="add-to-cart-btn"
                                variant="large"
                                size="large"
                                onClick={handleAddToCart}
                                href
                            >
                                Thêm vào giỏ hàng
                            </Button>

                            <button className="wishlist-btn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </button>
                        </div>

                        <div className="delivery-info">
                            <div className="info-item">
                                <span className="icon">🚚</span>
                                <span>Giao hàng miễn phí & Nhanh chóng</span>
                            </div>
                            <div className="info-item">
                                <span className="icon">🎁</span>
                                <span>Quà tặng kèm khi mua từ 500k</span>
                            </div>
                        </div>

                        {/* Our Promise - 3 đặc điểm */}
                        <div className="our-promise">
                            <h2 className="promise-title">Our Promise</h2>
                            <h3 className="promise-subtitle">Tinh hoa Socola Việt</h3>
                            <div className="promise-features">
                                {features.map((feat, idx) => (
                                    <FeatureItem
                                        key={idx}
                                        icon={feat.icon}
                                        title={feat.title}
                                        desc={feat.desc}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Thành phần dinh dưỡng & Bảo quản */}
                        <div className="nutrition-care">
                            <div className="nutrition">
                                <h3>Thành phần dinh dưỡng</h3>
                                <ul>
                                    <li>Năng lượng (100g): <strong>580 kcal</strong></li>
                                    <li>Protein: <strong>8.5g</strong></li>
                                    <li>Carbohydrate: <strong>45g</strong></li>
                                    <li>Chất béo: <strong>42g</strong></li>
                                </ul>
                            </div>
                            <div className="care">
                                <h3>Bảo quản & Lưu ý</h3>
                                <ul>
                                    <li>Nhiệt độ lý tưởng: 18 - 22°C</li>
                                    <li>Tránh ánh nắng trực tiếp</li>
                                    <li>Độ ẩm dưới 65%</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sản phẩm liên quan */}
                <section className="related-section">
                    <FeaturedProducts
                        title="Có thể bạn sẽ thích"
                        limit={4}
                        centerTitle={true}
                    />
                </section>
            </div>
        </div>
    );
};

export default ProductDetailPage;