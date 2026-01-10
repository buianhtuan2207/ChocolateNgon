import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icons/Icon';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import { CartItemType } from '../../data/cart'; // Import Interface từ data
import './cartItem.scss'; // Import CSS riêng

interface CartItemProps {
    item: CartItemType;
    onUpdateQuantity: (id: number, newQty: number) => void;
    onRemove: (id: number) => void;
    onToggleSelect: (id: number) => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemove, onToggleSelect }: CartItemProps) {
    const formatVND = (price: number) => price.toLocaleString("vi-VN") + "₫";
    const total = item.price * item.quantity;

    return (
        <div className={`cart-item ${item.isSelected ? 'selected' : ''}`}>
            <div className="col-checkbox">
                <input
                    type="checkbox"
                    className="custom-checkbox"
                    checked={item.isSelected}
                    onChange={() => onToggleSelect(item.id)}
                />
            </div>

            <div className="col-product">
                <div className="img-wrapper">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="info">
                    <Link to={`/product/${item.productId}`} className="name">{item.title}</Link>
                    {item.subtitle && <p className="variant">{item.subtitle}</p>}
                    <button className="remove-btn-mobile d-md-none" onClick={() => onRemove(item.id)}>
                        <Icon icon="trash" /> Xóa
                    </button>
                </div>
            </div>

            <div className="col-price desktop-only">{formatVND(item.price)}</div>

            <div className="col-quantity">
                <QuantitySelector
                    value={item.quantity}
                    onDecrease={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    onIncrease={() => onUpdateQuantity(item.id, item.quantity + 1)}
                />
                <button className="remove-text-btn desktop-only" onClick={() => onRemove(item.id)}>
                    <Icon icon="trash" /> Xóa
                </button>
            </div>

            <div className="col-total desktop-only">{formatVND(total)}</div>
        </div>
    );
}