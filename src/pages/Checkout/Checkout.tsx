import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Icon from '../../components/Icons/Icon';
import './checkout.scss';
import ShippingForm from "../../components/ShippingForm/ShippingForm";

export default function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState<'cod' | 'qr' | 'card'>('cod');

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        province: '',
        district: '',
        note: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const subtotal = 2680000;
    const discount = 0;

    const handleCheckout = () => {
        console.log('Đơn hàng:', { ...formData, paymentMethod });
        alert('Đơn hàng đang được xử lý...');
    };

    return (
        <div className="checkout-page">
            <div className="container py-5">
                {/* Breadcrumbs */}
                <div className="breadcrumbs mb-5">
                    <Link to="/" className="text-muted">Trang chủ</Link>
                    <Icon icon="chevron-right" className="mx-2 text-muted" />
                    <Link to="/cart" className="text-muted">Giỏ hàng</Link>
                    <Icon icon="chevron-right" className="mx-2 text-muted" />
                    <span className="text-primary fw-bold">Thanh toán</span>
                </div>

                <div className="row g-5">
                    <div className="col-lg-8">
                        {/* 1. Thông tin giao hàng */}
                        <ShippingForm formData={formData} onChange={handleInputChange} />

                        {/* 2. Phương thức thanh toán */}
                        <div className="pt-5 border-top">
                            <h2 className="h3 mb-4 d-flex align-items-center gap-3">
                                <span className="badge bg-primary rounded-pill">2</span>
                                Phương thức thanh toán
                            </h2>

                            <div className="vstack gap-3">
                                {[
                                    {
                                        value: 'cod',
                                        icon: 'truck-fast',
                                        title: 'Thanh toán khi nhận hàng (COD)',
                                        desc: 'Thanh toán bằng tiền mặt khi shipper giao tới',
                                    },
                                    {
                                        value: 'qr',
                                        icon: 'qrcode',
                                        title: 'Chuyển khoản ngân hàng (QR Code)',
                                        desc: 'Quét mã QR để thanh toán nhanh chóng',
                                    },
                                    {
                                        value: 'card',
                                        icon: 'credit-card',
                                        title: 'Thẻ tín dụng / Ghi nợ quốc tế',
                                        desc: 'Visa, Mastercard, JCB',
                                    },
                                ].map((method) => (
                                    <label
                                        key={method.value}
                                        className={`payment-option d-flex align-items-center p-4 rounded border cursor-pointer transition-all ${
                                            paymentMethod === method.value ? 'border-primary bg-primary/10' : 'border-secondary'
                                        }`}
                                        // onClick={() => setPaymentMethod(method.value)}
                                        onClick={() => setPaymentMethod(method.value as 'cod' | 'qr' | 'card')}
                                    >
                                        <input
                                            type="radio"
                                            name="payment"
                                            value={method.value}
                                            checked={paymentMethod === method.value}
                                            readOnly
                                            className="me-3"
                                        />
                                        <div className="d-flex align-items-center gap-4 flex-grow-1">
                                            <div className="icon-box p-3 bg-dark rounded">
                                                {/* @ts-ignore */}
                                                <Icon icon={method.icon} size="2x" />
                                            </div>
                                            <div>
                                                <div className="fw-bold">{method.title}</div>
                                                <div className="text-muted small">{method.desc}</div>
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="sticky-top" style={{ top: '100px' }}>
                            <OrderSummary
                                subtotal={subtotal}
                                discount={discount}
                                onCheckout={handleCheckout}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}