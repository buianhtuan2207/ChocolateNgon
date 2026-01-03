import React from "react";
import { Link } from "react-router-dom";
import "./cartProduct.scss";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import {Product} from "../../data/products";
import {useWishlist} from "../../context/WishlistContext";
import {useAuth} from "../../context/AuthContext";



// Định nghĩa props nhận vào danh sách data
interface CardProductProps {
    data: Product[];
    buttonLink?: string;
    buttonText?: string;
}

export default function CardProduct({
                                        data,
                                        buttonLink = "#",
                                        buttonText = "Mua ngay"
                                    }: CardProductProps) {

    const formatVND = (price: number) => {
        return price.toLocaleString("vi-VN") + " ₫";
    };
    const { toggleWishlist, isInWishlist } = useWishlist();
    const { user } = useAuth();


    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {data.map((p) => (
                // Đổi key từ index sang p.id để tối ưu hiệu năng React
                <div key={p.id} className="col">
                    <div className="card h-100 shadow-sm product-card">

                        <div className="product-img-wrapper">
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
                            <p className="card-text text-muted">{p.description}</p>
                        </div>

                        <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
                            <span className="price fw-bold">{formatVND(p.price)}</span>

                            <Link to={`/product/${p.id}`}>
                                <Button
                                    variant="primary"
                                    size="small"
                                >
                                    {buttonText}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}