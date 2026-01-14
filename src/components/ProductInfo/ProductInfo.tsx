import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Icon from '../Icons/Icon';
import './productInfo.scss';

interface ProductInfoProps {
    product: any;
    onAddToCart: (qty: number) => void;
}

export default function ProductInfo({ product, onAddToCart }: ProductInfoProps) {
    const [quantity, setQuantity] = useState(1);
    const formatVND = (price: number) => price.toLocaleString('vi-VN') + 'đ';

    // Reset số lượng về 1 khi sản phẩm thay đổi (dựa vào product.id)
    useEffect(() => {
        setQuantity(1);
    }, [product.id]);

    const handleDecrease = () => setQuantity(q => Math.max(1, q - 1));
    const handleIncrease = () => setQuantity(q => q + 1);

    return (
        <div className="product-info-component">
            {/* ... (Giữ nguyên phần hiển thị thông tin bên dưới) ... */}

            <span className="badge-bestseller">BESTSELLER</span>
            <h1 className="product-title">{product.title}</h1>

            <div className="rating-wrapper">
                <div className="d-flex text-star">
                    {[...Array(5)].map((_, i) => (
                        <Icon key={i} icon="star" className={i < (product.rating || 5) ? "fas" : "far"} />
                    ))}
                </div>
                <span className="text-review ms-2">({product.reviewCount} đánh giá)</span>
                <span className="mx-2 text-black-50">|</span>
                <span className="text-status">Còn hàng</span>
            </div>

            <div className="price-wrapper">
                <span className="current-price">{formatVND(product.price)}</span>
                {product.oldPrice && (
                    <span className="old-price">{formatVND(product.oldPrice)}</span>
                )}
                {product.discountPrice && <span className="discount-badge">-30%</span>}
            </div>

            <p className="description">{product.description}</p>

            <div className="action-controls">
                <div className="quantity-wrapper">
                    <button onClick={handleDecrease}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrease}>+</button>
                </div>

                <Button className="btn-action btn-cart" onClick={() => onAddToCart(quantity)}>
                    <Icon icon="shopping-cart" /> THÊM VÀO GIỎ HÀNG
                </Button>

                <Button className="btn-action btn-buy" href="/checkout">
                    <Icon icon="credit-card" /> MUA NGAY
                </Button>
            </div>

            <div className="policy-list">
                <div className="policy-item">
                    <Icon icon="truck" className="icon" /> <span>Chính sách giao hàng nhanh chóng</span>
                </div>
                <div className="policy-item">
                    <Icon icon="check" className="icon" /> <span>Cam kết chất lượng 100% tự nhiên</span>
                </div>
            </div>
        </div>
    );
}