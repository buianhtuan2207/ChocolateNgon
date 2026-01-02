import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../data/products";
// Đã xóa import PRODUCT_DETAILS
import Button from "../../components/Button/Button";
import FeaturedProducts from "../../components/FeatureProducts/FeaturedProducts";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
import "./productDetails.scss";

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const productId = Number(id);

    // Tìm sản phẩm trong danh sách duy nhất
    const product = PRODUCTS.find(p => p.id === productId);

    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState<string>("");

    useEffect(() => {
        // Nếu có danh sách ảnh phụ thì lấy ảnh đầu tiên, không thì lấy ảnh chính
        if (product?.images && product.images.length > 0) {
            setMainImage(product.images[0]);
        } else if (product?.image) {
            setMainImage(product.image);
        }
    }, [product]);

    if (!product) {
        return <div className="text-center py-32 text-2xl text-gray-600">Không tìm thấy sản phẩm</div>;
    }

    // Lấy dữ liệu trực tiếp từ product
    const {
        title,
        description,
        price,
        subtitle,
        features = [], // Mặc định là mảng rỗng nếu không có
        images = [product.image] // Nếu không có album thì dùng ảnh chính làm album
    } = product;

    const handleAddToCart = () => {
        console.log(`Đã thêm ${quantity} x "${title}" vào giỏ hàng`);
    };

    return (
        <div className="product-detail-page">
            <div className="product-detail-container">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <span>Trang chủ</span> / <span>Sản phẩm</span> / <span className="current">{title}</span>
                </div>

                <div className="product-detail-main">
                    {/* Left: Gallery */}
                    <div className="product-gallery">
                        <div className="main-image-wrapper">
                            <img src={mainImage} alt={title} className="main-image" />
                            {product.isHot && <div className="collection-badge">Best Seller</div>}
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
                            {title} {subtitle && <span className="subtitle">{subtitle}</span>}
                        </h1>

                        <div className="product-rating">
                            <span>★★★★★</span> <span className="review-count">Đánh giá tốt</span>
                            <span className="category-tag">{product.category.toUpperCase()}</span>
                        </div>

                        <p className="product-description">{description}</p>

                        <div className="product-price-section">
                            <div className="price-wrapper">
                                <span className="current-price">{price.toLocaleString("vi-VN")}đ</span>
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
                            >
                                Thêm vào giỏ hàng
                            </Button>
                        </div>

                        {/* Our Promise */}
                        {features.length > 0 && (
                            <div className="our-promise">
                                <h2 className="promise-title">Our Promise</h2>
                                <h3 className="promise-subtitle">Đặc điểm nổi bật</h3>
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
                        )}
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