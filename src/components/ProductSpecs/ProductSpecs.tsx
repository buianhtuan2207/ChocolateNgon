import React from 'react';
import Icon from '../Icons/Icon';
import './productSpecs.scss';

export default function ProductSpecs() {
    return (
        <section className="product-specs py-5">
            <div className="container">
                <h2 className="section-title text-center mb-5">Đặc điểm nổi bật</h2>

                {/* 3 Badges */}
                <div className="row g-3 mb-4 justify-content-center">
                    <div className="col-md-4 col-lg-3">
                        <div className="spec-badge d-flex align-items-center gap-3 shadow-sm">
                            <div className="icon-circle"><Icon icon="leaf" /></div>
                            <div>
                                <h3 className="badge-title">NGUYÊN LIỆU TỰ NHIÊN</h3>
                                <p className="badge-desc">100% cacao Đắk Lắk</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <div className="spec-badge d-flex align-items-center gap-3 shadow-sm">
                            <div className="icon-circle"><Icon icon="ban" /></div>
                            <div>
                                <h3 className="badge-title">KHÔNG CHẤT BẢO QUẢN</h3>
                                <p className="badge-desc">Tươi mới, không phụ gia</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <div className="spec-badge d-flex align-items-center gap-3 shadow-sm">
                            <div className="icon-circle"><Icon icon="tools" /></div>
                            <div>
                                <h3 className="badge-title">QUY TRÌNH THỦ CÔNG</h3>
                                <p className="badge-desc">Tỉ mỉ từng công đoạn</p>
                            </div>
                        </div>
                    </div>
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