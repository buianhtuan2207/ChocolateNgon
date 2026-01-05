import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icons/Icon';
import './orderSummary.scss'; // Import CSS riêng

interface OrderSummaryProps {
    subtotal: number;
    discount: number;
    taxRate?: number;
    onCheckout: () => void;
}

export default function OrderSummary({ subtotal, discount, taxRate = 0.08, onCheckout }: OrderSummaryProps) {
    const tax = subtotal * taxRate;
    const total = subtotal - discount + tax;
    const formatVND = (price: number) => price.toLocaleString("vi-VN") + "₫";

    return (
        <div className="order-summary-wrapper">
            {/* Coupon Section */}
            <div className="coupon-widget">
                <h3 className="widget-title"><Icon icon="tag" /> Mã giảm giá</h3>
                <div className="coupon-input-group">
                    <input type="text" placeholder="Nhập mã coupon" />
                    <Button variant="secondary" size="small" className="btn-apply" href={undefined}>Áp dụng</Button>
                </div>
            </div>

            {/* Summary Section */}
            <div className="summary-widget">
                <h3 className="widget-title">Tóm tắt đơn hàng</h3>
                <div className="summary-row">
                    <span>Tạm tính</span><span>{formatVND(subtotal)}</span>
                </div>
                <div className="summary-row discount">
                    <span>Giảm giá</span><span>-{formatVND(discount)}</span>
                </div>
                <div className="summary-row">
                    <span>Thuế VAT ({(taxRate * 100).toFixed(0)}%)</span><span>{formatVND(tax)}</span>
                </div>
                <div className="divider"></div>
                <div className="summary-row total">
                    <span>Tổng cộng</span>
                    <div className="text-end">
                        <span className="total-price">{formatVND(total)}</span>
                        <small className="vat-note">(Đã bao gồm VAT)</small>
                    </div>
                </div>

                <Button variant="primary" size="large" className="w-100 mt-4" onClick={onCheckout} href={undefined}>
                    Tiến hành thanh toán <Icon icon="arrow-right" />
                </Button>

                <div className="security-note"><Icon icon="lock" /> Thanh toán bảo mật 100%</div>
                <div className="payment-icons">
                    <span className="card-icon">VISA</span><span className="card-icon">MC</span><span className="card-icon">MOMO</span>
                </div>
            </div>
        </div>
    );
}