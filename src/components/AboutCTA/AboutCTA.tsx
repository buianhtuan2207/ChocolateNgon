import React from 'react';
import Button from '../../components/Button/Button';
import './aboutCTA.scss';

export default function AboutCTA() {
    return (
        <section className="about-cta-section py-5 text-center">
            <div className="container">
                <div className="mx-auto" style={{ maxWidth: '550px' }}>
                    <h2 className="cta-title mb-3">Trải nghiệm hương vị thuần bản</h2>
                    <p className="cta-desc mb-4">
                        Khám phá bộ sưu tập socola thủ công được thiết kế riêng cho những người sành thưởng thức.
                    </p>
                    <Button variant="primary" size="medium" href="/product" className="cta-btn">
                        KHÁM PHÁ BỘ SƯU TẬP
                    </Button>
                </div>
            </div>
        </section>
    );
}