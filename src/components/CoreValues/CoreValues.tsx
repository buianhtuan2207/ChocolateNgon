import React from 'react';
import './coreValues.scss';
import Icon from '../Icons/Icon';

export default function CoreValues() {
    return (
        <section className="core-values-section py-5">
            <div className="container py-4">
                <div className="text-center mb-4">
                    <h2 className="section-title mb-3">Giá Trị Cốt Lõi</h2>
                    <div className="divider mx-auto"></div>
                </div>

                <div className="row g-0 values-grid">
                    {/* Cột 1 */}
                    <div className="col-md-4 value-item">
                        <div className="p-4 text-center h-100 d-flex flex-column align-items-center">
                            <div className="icon mb-3"><Icon icon="leaf" /></div>
                            <h3 className="h5 mb-2 title">Nguyên Liệu</h3>
                            <p className="desc">Chỉ sử dụng hạt cacao tuyển chọn trực tiếp từ các nông hộ đạt chuẩn bền vững.</p>
                        </div>
                    </div>

                    {/* Cột 2 */}
                    <div className="col-md-4 value-item border-md-x">
                        <div className="p-4 text-center h-100 d-flex flex-column align-items-center">
                            <div className="icon mb-3"><Icon icon="star" /></div>
                            <h3 className="h5 mb-2 title">Chất Lượng</h3>
                            <p className="desc">Kiểm soát nghiêm ngặt về nhiệt độ và độ mịn để đạt đến độ tan chảy hoàn hảo.</p>
                        </div>
                    </div>

                    {/* Cột 3 */}
                    <div className="col-md-4 value-item">
                        <div className="p-4 text-center h-100 d-flex flex-column align-items-center">
                            <div className="icon mb-3"><Icon icon="check" /></div>
                            <h3 className="h5 mb-2 title">Minh Bạch</h3>
                            <p className="desc">Truy xuất nguồn gốc rõ ràng, đảm bảo sự công bằng và tôn trọng đối với người nông dân.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}