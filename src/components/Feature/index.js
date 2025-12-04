import React from "react";
import "./style.scss";

const features = [
    { img: "/assets/img/category/classic.png", title: "Giá tốt nhất", desc: "Cam kết giá luôn rẻ nhất thị trường" },
    { img: "/assets/img/category/MC-1.png",    title: "Hàng mới về",     desc: "Cập nhật mỗi ngày" },
    { img: "/assets/img/category/ML.png",      title: "Hàng hot đồng giá", desc: "Best seller cực cháy" },
    { img: "/assets/img/category/NBC.png",     title: "Khuyến mãi",      desc: "Ưu đãi liên tục mỗi tuần" },
    { img: "/assets/img/category/PTP.png",     title: "Combo tiết kiệm", desc: "Mua càng nhiều càng rẻ" },
];

export default function FeatureHighlights() {
    return (
        <section className="feature-highlights">
            <div className="container">
                <div className="feature-highlights__list">
                    {features.map((item, index) => (
                        <div key={index} className="feature-item">
                            <div className="feature-item__img">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="feature-item__content">
                                <h3 className="feature-item__title"
                                    dangerouslySetInnerHTML={{ __html: item.title }} />
                                <p className="feature-item__desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}