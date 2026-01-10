import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../components/Icons/Icon';
import CartItem from '../../components/CartItem/CartItem';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import './cart.scss';
import { useCart } from '../../context/CartContext';

export default function Cart() {
    const navigate = useNavigate();

    // 1. Lấy toggleItemSelection từ Context
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleItemSelection
    } = useCart();

    // 2. Cập nhật logic tính toán: Chỉ tính những món ĐƯỢC CHỌN (isSelected === true)
    const { subtotal, count } = useMemo(() => {
        return cartItems.reduce((acc, item) => {
            if (item.isSelected) { // Kiểm tra điều kiện chọn
                acc.subtotal += item.price * item.quantity;
                acc.count += item.quantity;
            }
            return acc;
        }, { subtotal: 0, count: 0 });
    }, [cartItems]);

    const handleCheckout = () => {
        // Kiểm tra count (số lượng sp được chọn) thay vì cartItems.length
        if (count === 0) {
            alert("Vui lòng chọn ít nhất 1 sản phẩm để thanh toán!");
            return;
        }
        navigate('/checkout');
    };

    const handleRemove = (id: number) => {
        if (window.confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
            removeFromCart(id);
        }
    };

    const handleClearAll = () => {
        if (window.confirm("Bạn muốn xóa toàn bộ giỏ hàng?")) clearCart();
    };

    return (
        <div className="cart-page">
            <div className="container py-5">
                <div className="page-header">
                    <h1 className="page-title">Giỏ hàng</h1>
                    <p className="page-subtitle">
                        {/* Hiển thị số lượng sản phẩm ĐANG ĐƯỢC CHỌN */}
                        Bạn đang chọn <span className="text-highlight">{count} sản phẩm</span> để thanh toán
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-8 mb-4">
                        <div className="cart-list-container">
                            {cartItems.length > 0 && (
                                <div className="cart-header-row d-none d-md-grid">
                                    <div className="col-header"></div>
                                    <div className="col-header ps-2">SẢN PHẨM</div>
                                    <div className="col-header text-center">ĐƠN GIÁ</div>
                                    <div className="col-header text-center">SỐ LƯỢNG</div>
                                    <div className="col-header text-end">TỔNG</div>
                                </div>
                            )}

                            <div className="cart-items-wrapper">
                                {cartItems.length > 0 ? (
                                    cartItems.map(item => (
                                        <CartItem
                                            key={item.id}
                                            item={item}
                                            onUpdateQuantity={updateQuantity}
                                            onRemove={handleRemove}
                                            // 3. Truyền hàm xử lý vào đây
                                            onToggleSelect={toggleItemSelection}
                                        />
                                    ))
                                ) : (
                                    <div className="empty-cart-state text-center py-5">
                                        <div className="mb-3 text-muted" style={{fontSize: '60px'}}>
                                            <Icon icon="shopping-cart" />
                                        </div>
                                        <h5 className="mb-3">Giỏ hàng của bạn đang trống</h5>
                                        <Link to="/product">
                                            <button className="btn btn-primary">Mua sắm ngay</button>
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {cartItems.length > 0 && (
                                <div className="cart-footer-actions">
                                    <Link to="/product" className="continue-link">
                                        <Icon icon="arrow-left" /> Tiếp tục mua sắm
                                    </Link>
                                    <button className="clear-all-btn" onClick={handleClearAll}>
                                        <Icon icon="trash" /> Xóa tất cả
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <OrderSummary
                            subtotal={subtotal}
                            discount={0}
                            onCheckout={handleCheckout}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}