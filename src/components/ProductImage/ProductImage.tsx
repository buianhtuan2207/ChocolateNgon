import React, { useState, useEffect } from 'react';
import './productImage.scss';

interface ProductImageProps {
    images: string[];
}

export default function ProductImage({ images }: ProductImageProps) {
    // Khởi tạo state
    const [activeImg, setActiveImg] = useState(images[0]);

    // Cập nhật activeImg khi props images thay đổi (khi chuyển sản phẩm khác)
    useEffect(() => {
        if (images && images.length > 0) {
            setActiveImg(images[0]);
        }
    }, [images]);

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
                        // So sánh activeImg với img hiện tại để active đúng ô thumbnail
                        className={`thumb-item ${activeImg === img ? 'active' : ''}`}
                        onClick={() => setActiveImg(img)}
                    >
                        <img src={img} alt={`thumb-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}