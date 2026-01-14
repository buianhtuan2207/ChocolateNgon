import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./cartProduct.scss";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import { Product } from "../../data/products";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

interface CardProductProps {
    data: Product[];
    buttonText?: string;
    buttonLink?: string;
    showSaleBadge?: boolean;
}

export default function CardProduct({
                                        data,
                                        buttonText = "Mua ngay",
                                        buttonLink, // Nếu có link này thì ưu tiên (vd: từ banner), nếu không thì dùng logic mặc định
                                        showSaleBadge = false
                                    }: CardProductProps) {

    const navigate = useNavigate(); // Hook chuyển trang
    const formatVND = (price: number) => price.toLocaleString("vi-VN") + " ₫";

    const { toggleWishlist, isInWishlist } = useWishlist();
    const { addToCart } = useCart();
    const { user } = useAuth();

    // 1. Xử lý thêm vào giỏ hàng (Nút Icon Shopping Cart)
    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
        // Có thể thêm toast thông báo "Đã thêm vào giỏ" ở đây
    };

    // 2. Xử lý Mua Ngay (Nút Button chính)
    const handleBuyNow = (e: React.MouseEvent, product: Product) => {
        // Nếu buttonLink được truyền vào (ví dụ link xem chi tiết), ta để Button component tự xử lý thẻ <a>.
        // Nhưng nếu là nút "Mua ngay" mặc định, ta cần chặn hành vi link, thêm vào giỏ, rồi mới chuyển trang.
        if (!buttonLink) {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product); // Thêm sản phẩm vào context giỏ hàng
            navigate("/cart"); // Chuyển hướng đến trang giỏ hàng
        }
    };

    // Xử lý Wishlist
    const handleWishlist = (e: React.MouseEvent, product: Product) => {
        e.preventDefault();
        e.stopPropagation();
        if (!user) {
            alert("Vui lòng đăng nhập để thêm vào wishlist");
            return;
        }
        toggleWishlist(product);
    };

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {data.map((p) => {
                const hasDiscount = p.discountPrice && p.discountPrice < p.price;
                const discountPercent = hasDiscount
                    ? Math.round(((p.price - (p.discountPrice || 0)) / p.price) * 100)
                    : 0;

                return (
                    <div key={p.id} className="col">
                        <div className="card h-100 shadow-sm product-card">
                            <div className="product-img-wrapper">
                                {showSaleBadge && hasDiscount && (
                                    <div className="sale-badge">-{discountPercent}%</div>
                                )}

                                <Link to={`/product/${p.id}`} className="text-decoration-none">
                                    <img src={p.image} className="card-img-top" alt={p.title} />
                                </Link>

                                <div className="product-actions">
                                    {/* Wishlist */}
                                    <div
                                        className={`action-btn wishlist-btn ${isInWishlist(p.id) ? "active" : ""}`}
                                        onClick={(e) => handleWishlist(e, p)}
                                    >
                                        <Icon icon="heart" />
                                    </div>

                                    {/* Add to Cart (Icon) */}
                                    <div
                                        className="action-btn cart-btn"
                                        onClick={(e) => handleAddToCart(e, p)}
                                    >
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
                                            <span className="price fw-bold text-danger">{formatVND(p.discountPrice!)}</span>
                                            <span className="old-price text-muted text-decoration-line-through">{formatVND(p.price)}</span>
                                        </>
                                    ) : (
                                        <span className="price fw-bold">{formatVND(p.price)}</span>
                                    )}
                                </div>

                                <Button
                                    variant={hasDiscount ? "danger" : "primary"}
                                    size="small"
                                    href={buttonLink}
                                    onClick={(e) => handleBuyNow(e, p)}
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