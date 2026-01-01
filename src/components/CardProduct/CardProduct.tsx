import React from "react";
import { Link } from "react-router-dom";
import "./cartProduct.scss";
import Button from "../Button/Button";
import { Product } from "../../data/products";
import Icon from "../Icons/Icon"; // Import interface từ file data


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

    // Hàm format giữ nguyên logic cũ
    const formatVND = (price: number) => {
        return price.toLocaleString("vi-VN") + " ₫";
    };

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
                                <div className="action-btn">
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

                            {/* FIX LỖI Ở ĐÂY */}
                            <Link to={`/product/${p.id}`}>
                                <Button
                                    variant="primary"
                                    size="small"
                                    icons
                                    href={undefined} // Truyền undefined để thỏa mãn TypeScript nhưng vẫn render ra button
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