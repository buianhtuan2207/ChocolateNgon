import React from "react";
import "./style.scss";
import Button from "../Button";

export default function CardProduct({ buttonLink = "#", buttonText = "Mua ngay" }) {

    const products = [
        {
            title: "Socola Đắng 70%",
            description: "Hương vị đậm đà, nguyên chất từ cacao.",
            price: 1200000,
            image: "/assets/img/category/ML.png"
        },
        {
            title: "Socola Sữa",
            description: "Ngọt nhẹ, mịn và thơm béo.",
            price: 950000,
            image: "/assets/img/products/socola-vien.png"
        },
        {
            title: "Socola Hạnh Nhân",
            description: "Kết hợp cacao & hạnh nhân giòn rụm.",
            price: 1500000,
            image: "/assets/img/products/socola-hop.png"
        },
        {
            title: "Socola Đen Nguyên Chất",
            description: "Nguyên chất 100% cacao, vị mạnh và đậm đà.",
            price: 1800000,
            image: "/assets/img/products/socola-hop-2.png"
        },
        {
            title: "Socola Đắng 70%",
            description: "Hương vị đậm đà, nguyên chất từ cacao.",
            price: 1200000,
            image: "/assets/img/category/ML.png"
        },
        {
            title: "Socola Sữa",
            description: "Ngọt nhẹ, mịn và thơm béo.",
            price: 950000,
            image: "/assets/img/products/socola-vien.png"
        },
        {
            title: "Socola Hạnh Nhân",
            description: "Kết hợp cacao & hạnh nhân giòn rụm.",
            price: 1500000,
            image: "/assets/img/products/socola-hop.png"
        },
        {
            title: "Socola Đen Nguyên Chất",
            description: "Nguyên chất 100% cacao, vị mạnh và đậm đà.",
            price: 1800000,
            image: "/assets/img/products/socola-hop-2.png"
        },
    ];
    const formatVND = (price) => {
        return price.toLocaleString("vi-VN") + " ₫";
    };

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {products.map((p, index) => (
                <div key={index} className="col">
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
