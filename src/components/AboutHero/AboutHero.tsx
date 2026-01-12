import React from 'react';
import './aboutHero.scss';

export default function AboutHero() {
    return (
        <section className="about-hero d-flex flex-column align-items-center justify-content-center text-center">
            <div className="container">
                <span className="est-badge">EST. 2024</span>
                <h1 className="display-5 mb-3 hero-title">
                    Tinh hoa chế tác <br />
                    <span className="fst-italic text-primary-custom">Socola Cao Cấp</span>
                </h1>
                <p className="hero-desc mx-auto mb-4">
                    Hành trình định nghĩa lại sự sang trọng qua hương vị nguyên bản của hạt cacao Việt Nam.
                </p>
                <div className="vertical-divider mx-auto"></div>
            </div>
        </section>
    );
}