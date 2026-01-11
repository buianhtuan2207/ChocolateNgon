import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Icon from '../../components/Icons/Icon';
import './checkout.scss';
import ShippingForm from "../../components/ShippingForm/ShippingForm";
import PaymentMethods from "../../components/PaymentMethods/PaymentMethods";

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
                        <PaymentMethods selectedMethod={paymentMethod} onSelect={setPaymentMethod} />
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