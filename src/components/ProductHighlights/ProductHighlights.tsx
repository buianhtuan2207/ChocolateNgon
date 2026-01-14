import React from 'react';
import './productHighlights.scss';
import { ProductHighlight } from '../../data/products'; // Import kiểu dữ liệu

interface HighlightsProps {
    highlights?: ProductHighlight[]; // Nhận dữ liệu từ cha
}

export default function ProductHighlights({ highlights }: HighlightsProps) {
    // Nếu không có dữ liệu highlights (ví dụ sản phẩm chưa cập nhật db), có thể ẩn section hoặc hiện default
    if (!highlights || highlights.length === 0) {
        return null; // Hoặc return component rỗng
    }

    return (
        <section className="product-highlights py-5 border-top border-bottom border-light">
            <div className="container">
                <div className="text-center mb-5 d-flex flex-column align-items-center">
                    <h2 className="section-title mb-0">Hương vị diệu kỳ</h2>
                    <div className="divider"></div>
                </div>
                <div className="row g-4 justify-content-center">
                    {highlights.map((item, i) => (
                        <div className="col-md-4 text-center highlight-item" key={i}>
                            <div className="img-circle">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h3 className="highlight-title">{item.title}</h3>
                            <p className="highlight-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}