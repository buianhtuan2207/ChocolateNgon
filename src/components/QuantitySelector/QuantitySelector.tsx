import React from 'react';
import Icon from '../Icons/Icon';
import './quantitySelector.scss'; // Import CSS riêng

interface QuantitySelectorProps {
    value: number;
    onIncrease: () => void;
    onDecrease: () => void;
    min?: number;
}

export default function QuantitySelector({ value, onIncrease, onDecrease, min = 1 }: QuantitySelectorProps) {
    return (
        <div className="quantity-selector">
            <button className="qty-btn" onClick={onDecrease} disabled={value <= min} type="button">
                <Icon icon="minus" />
            </button>
            <input type="text" className="qty-input" value={value} readOnly />
            <button className="qty-btn" onClick={onIncrease} type="button">
                <Icon icon="plus" />
            </button>
        </div>
    );
}