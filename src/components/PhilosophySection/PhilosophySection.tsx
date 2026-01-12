import React from 'react';
import './philosophySection.scss';

export default function PhilosophySection() {
    return (
        <section className="philosophy-section py-4">
            <div className="container py-4">
                <div className="row align-items-center g-4">
                    <div className="col-lg-6 position-relative">
                        <div className="img-wrapper">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVyZVfjvdoYZ9z1GMF8uzDKIxkaKhJWJGZkWw5yssrLVEeQ21yRiFau1caJIRtcg29kiTCBo3xSebtElThBLEUxD7OOyYvIfC9QZWgK67Uk56D1dSBvizC6mdM8gRqzileYZIe2nv3gJppTR2DPc5RIGlM4a1eKOQt6zrQFqt840x0LpXDC7ejEYn9xJjF_7kwgJRw9Gr349bHe0YAcK4_DT-rPhJolfoC-XjCdJNC11UCYyouzXv2ZBL13MMFCY1hyG8P-bzIeRfY"
                                alt="Chế tác thủ công"
                                className="img-fluid w-100 rounded-1"
                            />
                            <div className="decor-box d-none d-lg-block"></div>
                        </div>
                    </div>

                    <div className="col-lg-6 ps-lg-5">
                        <h2 className="section-title mb-3 h2">
                            Triết lý của sự <br />
                            tối giản và thuần khiết
                        </h2>
                        <div className="content-text mb-4">
                            <p className="mb-2">
                                Tại ChocolateNgon, chúng tôi không theo đuổi những sự pha trộn cầu kỳ. Chúng tôi tôn vinh bản sắc của từng vùng đất thông qua những hạt cacao đơn nguồn (single-origin).
                            </p>
                            <p>
                                Mỗi thanh socola là sự kết tinh của hàng nghìn giờ nghiên cứu, sự tỉ mỉ của các nghệ nhân và cam kết về một nền nông nghiệp bền vững.
                            </p>
                        </div>

                        <div className="d-flex gap-4 pt-2 display-stat-item">
                            <div className="stat-item">
                                <span className="stat-num">100%</span>
                                <span className="stat-label">TỰ NHIÊN</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-num">Craft</span>
                                <span className="stat-label">THỦ CÔNG</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}