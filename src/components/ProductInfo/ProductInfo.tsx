import React, { useState } from 'react';
import Button from '../Button/Button'; // Tái sử dụng Button có sẵn
import Icon from '../Icons/Icon';
import './productInfo.scss';

interface ProductInfoProps {
    product: any;
    onAddToCart: (qty: number) => void;
}

export default function ProductInfo({ product, onAddToCart }: ProductInfoProps) {
    const [quantity, setQuantity] = useState(1);
    const formatVND = (price: number) => price.toLocaleString('vi-VN') + 'đ';

    const handleDecrease = () => setQuantity(q => Math.max(1, q - 1));
    const handleIncrease = () => setQuantity(q => q + 1);

    return (
        <div className="product-info-component">
            {/* Badge */}
            <span className="badge-bestseller">BESTSELLER</span>

            {/* Title */}
            <h1 className="product-title">{product.title}</h1>

            {/* Rating */}
            <div className="rating-wrapper">
                <div className="d-flex text-star">
                    {[...Array(5)].map((_, i) => (
                        <Icon key={i} icon="star" className={i < 4 ? "fas" : "far"} />
                    ))}
                </div>
                <span className="text-review ms-2">({product.reviewCount} đánh giá)</span>
                <span className="mx-2 text-black-50">|</span>
                <span className="text-status">Còn hàng</span>
            </div>

            {/* Price */}
            <div className="price-wrapper">
                <span className="current-price">{formatVND(product.price)}</span>
                {product.oldPrice && (
                    <span className="old-price">{formatVND(product.oldPrice)}</span>
                )}
                <span className="discount-badge">-30%</span>
            </div>

            {/* Description */}
            <p className="description">
                {product.description}
            </p>

            {/* Action Row: Quantity | Add Cart | Buy Now */}
            <div className="action-controls">
                {/* 1. Quantity Selector (Custom trực tiếp để giống hình) */}
                <div className="quantity-wrapper">
                    <button onClick={handleDecrease}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrease}>+</button>
                </div>

                {/* 2. Add to Cart Button (Sử dụng Button component có sẵn + class custom) */}
                <Button
                    className="btn-action btn-cart"
                    onClick={() => onAddToCart(quantity)}
                >
                    <Icon icon="shopping-cart" /> THÊM VÀO GIỎ HÀNG
                </Button>

                {/* 3. Buy Now Button */}
                <Button
                    className="btn-action btn-buy"
                    href="/checkout"
                >
                    <Icon icon="credit-card" /> MUA NGAY
                </Button>
            </div>

            {/* Policy Info */}
            <div className="policy-list">
                <div className="policy-item">
                    <Icon icon="truck" className="icon" />
                    <span>Chính sách giao hàng nhanh chóng</span>
                </div>
                <div className="policy-item">
                    <Icon icon="check" className="icon" />
                    <span>Cam kết chất lượng 100% tự nhiên</span>
                </div>
            </div>
        </div>
    );
}