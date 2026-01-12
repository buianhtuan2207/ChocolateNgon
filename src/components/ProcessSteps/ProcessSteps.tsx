import React from 'react';
import './processSteps.scss';

export default function ProcessSteps() {
    const steps = [
        { id: "01", title: "Tuyển chọn & Lên men", desc: "Hạt cacao được thu hoạch thủ công và lên men tự nhiên trong thùng gỗ truyền thống." },
        { id: "02", title: "Rang chậm nhiệt thấp", desc: "Quy trình rang ở nhiệt độ thấp giúp giữ lại trọn vẹn hương vị trái cây tự nhiên." },
        { id: "03", title: "Nghiền mịn bằng đá", desc: "Hạt được nghiền liên tục bằng cối đá trong 48-72 giờ cho đến khi đạt độ mịn dưới 20 micron." },
        { id: "04", title: "Đổ khuôn & Ủ lạnh", desc: "Socola lỏng được kết tinh (tempering) và đổ khuôn thủ công, sau đó ủ lạnh để tạo độ bóng." },
    ];

    return (
        <section className="process-steps-section py-5">
            <div className="container py-5">
                <div className="row g-5">
                    {/* Cột trái: Tiêu đề dính (Sticky) */}
                    <div className="col-lg-4">
                        <div className="sticky-title-wrapper">
                            <h2 className="display-5 section-title">
                                Quy Trình <br />
                                <span className="fst-italic text-primary-custom">Từ Hạt Đến Thanh</span>
                            </h2>
                        </div>
                    </div>

                    {/* Cột phải: Danh sách các bước */}
                    <div className="col-lg-8">
                        <div className="steps-list ps-lg-5">
                            {steps.map((step) => (
                                <div className="step-item d-flex gap-4 mb-5" key={step.id}>
                                    <span className="step-num">{step.id}</span>
                                    <div>
                                        <h4 className="step-title h5">{step.title}</h4>
                                        <p className="step-desc">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}