import React from 'react';
import Icon from '../Icons/Icon';
import './productSpecs.scss';

// Định nghĩa kiểu dữ liệu Feature khớp với db.json
interface Feature {
    icon: string;
    title: string;
    desc: string;
}

interface ProductSpecsProps {
    features?: Feature[];
}

export default function ProductSpecs({ features }: ProductSpecsProps) {
    // Dữ liệu mặc định nếu sản phẩm không có features riêng
    const defaultFeatures = [
        { icon: "leaf", title: "NGUYÊN LIỆU TỰ NHIÊN", desc: "100% cacao Đắk Lắk" },
        { icon: "ban", title: "KHÔNG CHẤT BẢO QUẢN", desc: "Tươi mới, không phụ gia" },
        { icon: "tools", title: "QUY TRÌNH THỦ CÔNG", desc: "Tỉ mỉ từng công đoạn" }
    ];

    const displayFeatures = features && features.length > 0 ? features : defaultFeatures;

    const renderIcon = (iconStr: string) => {
        // Nếu icon là tên FontAwesome (vd: "leaf") thì dùng component Icon
        if (["leaf", "ban", "tools", "check", "truck", "gift"].includes(iconStr)) {
            return <Icon icon={iconStr as any} />;
        }
        // Nếu là emoji hoặc string khác thì hiển thị text
        return <span style={{ fontSize: '1.2rem' }}>{iconStr}</span>;
    };

    return (
        <section className="product-specs py-5">
            <div className="container">
                <h2 className="section-title text-center mb-5">Đặc điểm nổi bật</h2>

                {/* 3 Badges Dynamic */}
                <div className="row g-3 mb-4 justify-content-center">
                    {displayFeatures.map((feat, index) => (
                        <div className="col-md-4 col-lg-3" key={index}>
                            <div className="spec-badge d-flex align-items-center gap-3 shadow-sm h-100">
                                <div className="icon-circle">
                                    {renderIcon(feat.icon)}
                                </div>
                                <div>
                                    <h3 className="badge-title">{feat.title}</h3>
                                    <p className="badge-desc">{feat.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Box */}
                <div className="info-box shadow-sm">
                    <div className="row g-0">
                        <div className="col-md-6 p-4 border-end-md">
                            <h4 className="info-header">THÀNH PHẦN DINH DƯỠNG</h4>
                            <div>
                                <div className="nutrition-row"><span>Năng lượng</span><span>580 kcal</span></div>
                                <div className="nutrition-row"><span>Protein</span><span>8.5g</span></div>
                                <div className="nutrition-row"><span>Carbohydrate</span><span>48g</span></div>
                                <div className="nutrition-row"><span>Chất béo</span><span>42g</span></div>
                            </div>
                        </div>
                        <div className="col-md-6 p-4 bg-light bg-opacity-25">
                            <h4 className="info-header">HƯỚNG DẪN BẢO QUẢN</h4>
                            <p className="storage-text mb-0">
                                Bảo quản nơi khô ráo, thoáng mát (18-22°C). Tránh ánh nắng trực tiếp.
                                Ngon hơn khi để lạnh nhưng cần bọc kín để tránh ám mùi từ các thực phẩm khác.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}