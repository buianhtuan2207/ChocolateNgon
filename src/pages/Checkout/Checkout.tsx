import React, {useEffect, useMemo, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Icon from '../../components/Icons/Icon';
import './checkout.scss';
import ShippingForm from "../../components/ShippingForm/ShippingForm";
import PaymentMethods from "../../components/PaymentMethods/PaymentMethods";
import {useAuth} from "../../context/AuthContext";
import {useCart} from "../../context/CartContext";
import Toast, { ToastType } from '../../components/Toast/Toast';

export default function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState<'cod' | 'qr' | 'card'>('cod');
    const { user } = useAuth();
    const navigate = useNavigate();
    const { cartItems } = useCart();
    const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        note: '',
    });

    // Tự động điền dữ liệu khi user có tồn tại (lần đầu load trang)
    useEffect(() => {
        if (user) {
            setFormData({
                fullName: user.fullName || '',
                phone: user.phone || '',
                email: user.email || '',
                address: user.address || '',
                note: '',
            });
        }
    }, [user]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const { subtotalValue, discountValue } = useMemo(() => {
        // Lọc những sản phẩm được tích chọn ở trang giỏ hàng
        const selectedItems = cartItems.filter(item => item.isSelected);

        const total = selectedItems.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
        }, 0);

        return {
            subtotalValue: total,
            discountValue: 0
        };
    }, [cartItems]);

    const handleCheckout = () => {
        // 1. Kiểm tra giỏ hàng trống
        if (subtotalValue === 0) {
            setToast({ message: "Giỏ hàng của bạn đang trống!", type: 'error' });
            return;
        }

        // 2. Kiểm tra thông tin bắt buộc
        if (!formData.fullName || !formData.phone || !formData.address) {
            setToast({ message: "Vui lòng nhập đầy đủ thông tin giao hàng!", type: 'warning' });
            return;
        }

        // 3. Xử lý đặt hàng thành công
        console.log('Order Data:', { ...formData, paymentMethod, total: subtotalValue });
        setToast({ message: "Đặt hàng thành công!.", type: 'success' });

        setTimeout(() => {
            // Chuyển hướng sang trang cảm ơn
            navigate('/', { state: { orderData: formData } });
        }, 1500);
    };

    return (
        <div className="checkout-page">
            {toast && (
                <div className="toast-container position-fixed top-0 end-0 p-3" style={{ zIndex: 9999 }}>
                    <Toast
                        message={toast.message}
                        type={toast.type}
                        onClose={() => setToast(null)}
                    />
                </div>
            )}
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
                                subtotal={subtotalValue}
                                discount={discountValue}
                                onCheckout={handleCheckout}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}