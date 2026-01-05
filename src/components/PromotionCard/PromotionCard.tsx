import React from 'react';
import { Link } from 'react-router-dom';
import './promotionCard.scss';

interface PromotionCardProps {
    id?: number;
    tag: string;
    tagType: 'hot' | 'freeship' | 'gift';
    title: string;
    description: string;
    expiryDate: string;
    image: string;
    buttonText: string;
    buttonLink?: string;
    onAction?: () => void;
}

export default function PromotionCard({
                                          tag,
                                          tagType,
                                          title,
                                          description,
                                          expiryDate,
                                          image,
                                          buttonText,
                                          buttonLink,
                                          onAction
                                      }: PromotionCardProps) {
    return (
        <div className="promotion-card">
            <div className="promotion-card__header">
                <img src={image} alt={title} className="promotion-card__img" />
                <span className={`promotion-card__tag promotion-card__tag--${tagType}`}>
                    {tag}
                </span>
                <h3 className="promotion-card__title">{title}</h3>
            </div>

            <div className="promotion-card__body">
                <p className="promotion-card__desc">{description}</p>
                <div className="promotion-card__footer">
                    <span className="promotion-card__date">
                        <i className="far fa-clock me-1"></i> Hết hạn: {expiryDate}
                    </span>

                    {buttonLink && buttonLink !== "#" ? (
                        <Link to={buttonLink} className="promotion-card__btn text-decoration-none">
                            {buttonText}
                        </Link>
                    ) : (
                        <button className="promotion-card__btn" onClick={onAction}>
                            {buttonText}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}