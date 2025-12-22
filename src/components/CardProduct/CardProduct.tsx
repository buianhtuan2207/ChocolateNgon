import React from "react";
import "./style.scss";
import Button from "../Button/Button";
import { Product } from "../../data/products"; // Import interface từ file data

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
                        <img src={p.image} className="card-img-top" alt={p.title} />

                        <div className="card-body">
                            <h5 className="card-title fw-bold">{p.title}</h5>
                            <p className="card-text text-muted">{p.description}</p>
                        </div>

                        <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
                            <span className="price fw-bold">{formatVND(p.price)}</span>
                            <Button
                                variant="primary"
                                size="small"
                                icons
                                href={buttonLink}>
                                {buttonText}
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}