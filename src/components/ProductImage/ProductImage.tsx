import React, { useState } from 'react';
import './productImage.scss';

interface ProductImageProps {
    images: string[];
}

export default function ProductImage({ images }: ProductImageProps) {
    const [activeImg, setActiveImg] = useState(images[0]);

    return (
        <div className="product-image-component">
            {/* Ảnh lớn */}
            <div className="main-img-wrapper shadow-sm">
                <img src={activeImg} alt="Product Detail" />
            </div>

            {/* Thumbnails Grid */}
            <div className="thumb-list">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`thumb-item ${activeImg === img ? 'active' : ''}`}
                        onClick={() => setActiveImg(img)}
                    >
                        {/* Render ảnh hoặc số thứ tự mô phỏng design */}
                        <img src={img} alt={`thumb-${index}`} />

                        {/* (Tùy chọn) Thêm số đè lên để giống hệt design nếu ảnh là background */}
                        {/* <span className="thumb-number">{index + 1}</span> */}
                    </div>
                ))}
            </div>
        </div>
    );
}