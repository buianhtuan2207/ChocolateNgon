import React from 'react';
import Button from '../Button/Button';
import './banner.scss';

export default function Banner({ type = "hero", subtitle, title, description, buttonText, buttonLink, image }) {
    return (
        <section className={`banner banner--${type}`}>
            <div className="banner__container">
                <div className="banner__content">
                    {subtitle && <span className="banner__subtitle">{subtitle}</span>}
                    {title && <h2 className="banner__title" dangerouslySetInnerHTML={{ __html: title }} />}
                    {description && <p className="banner__desc">{description}</p>}
                    <div className="banner__action">
                        <Button
                            variant="primary"
                            size="large"
                            href={buttonLink || "#"}>
                            {buttonText || "Mua ngay"}
                        </Button>
                    </div>
                </div>

                {image && (
                    <div className="banner__img">
                        <img src={image} alt="Socola" />
                    </div>
                )}
            </div>
        </section>
    );
}