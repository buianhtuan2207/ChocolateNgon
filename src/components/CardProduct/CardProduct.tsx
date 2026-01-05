import React from "react";
import { Link } from "react-router-dom";
import "./cartProduct.scss";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import { Product } from "../../data/products";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";

interface CardProductProps {
    data: Product[];
    buttonText?: string;
    buttonLink?: string;
    showSaleBadge?: boolean; // Bật cái này ở trang Khuyến mãi
}

export default function CardProduct({
                                        data,
                                        buttonText = "Mua ngay",
                                        buttonLink,
                                        showSaleBadge = false
                                    }: CardProductProps) {

    const formatVND = (price: number) => {
        return price.toLocaleString("vi-VN") + " ₫";
    };

    const { toggleWishlist, isInWishlist } = useWishlist();
    const { user } = useAuth();

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {data.map((p) => {
                // Kiểm tra xem sản phẩm có đang giảm giá không
                const hasDiscount = p.discountPrice && p.discountPrice < p.price;

                // Tính % giảm giá
                const discountPercent = hasDiscount
                    ? Math.round(((p.price - (p.discountPrice || 0)) / p.price) * 100)
                    : 0;

                return (
                    <div key={p.id} className="col">
                        <div className="card h-100 shadow-sm product-card">
                            <div className="product-img-wrapper">
                                {/* Hiển thị Badge % giảm giá nếu showSaleBadge = true */}
                                {showSaleBadge && hasDiscount && (
                                    <div className="sale-badge">
                                        -{discountPercent}%
                                    </div>
                                )}

                                <Link to={`/product/${p.id}`} className="text-decoration-none">
                                    <img src={p.image} className="card-img-top" alt={p.title} />
                                </Link>

                                <div className="product-actions">
                                    <div
                                        className={`action-btn wishlist-btn ${
                                            isInWishlist(p.id) ? "active" : ""
                                        }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            if (!user) {
                                                alert("Vui lòng đăng nhập để thêm vào wishlist");
                                                return;
                                            }
                                            toggleWishlist(p);
                                        }}
                                    >
                                        <Icon icon="heart" />
                                    </div>
                                    <div className="action-btn">
                                        <Icon icon="shopping-cart" />
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <Link to={`/product/${p.id}`} className="text-decoration-none text-dark">
                                    <h5 className="card-title fw-bold">{p.title}</h5>
                                </Link>
                                <p className="card-text text-muted text-truncate">{p.description}</p>
                            </div>

                            <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
                                <div className="price-container d-flex flex-column">
                                    {hasDiscount ? (
                                        <>
                                            <span className="price fw-bold text-danger">
                                                {formatVND(p.discountPrice!)}
                                            </span>
                                            <span className="old-price text-muted text-decoration-line-through">
                                                {formatVND(p.price)}
                                            </span>
                                        </>
                                    ) : (
                                        <span className="price fw-bold">
                                            {formatVND(p.price)}
                                        </span>
                                    )}
                                </div>

                                <Button
                                    variant={hasDiscount ? "danger" : "primary"}
                                    size="small"
                                    href={buttonLink || `/product/${p.id}`}
                                >
                                    {buttonText}
                                </Button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}