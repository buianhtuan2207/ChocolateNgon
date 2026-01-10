import React, { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../components/Icons/Icon';
import CartItem from '../../components/CartItem/CartItem';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import { CartItemType } from '../../data/cart';
import Data from '../../data/db.json';
import './cart.scss';

export default function Cart() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);

    // Load data từ db.json giả lập async
    useEffect(() => {
        setTimeout(() => {
            // Ép kiểu dữ liệu cart trong db.json sang CartItemType
            const data = Data.cart as unknown as CartItemType[];
            setCartItems(data);
        }, 200);
    }, []);

    const handleUpdateQuantity = (id: number, newQty: number) => {
        if (newQty < 1) return;
        setCartItems(prev => prev.map(item =>
            item.id === id ? { ...item, quantity: newQty } : item
        ));
    };

    const handleRemove = (id: number) => {
        if (window.confirm("Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?")) {
            setCartItems(prev => prev.filter(item => item.id !== id));
        }
    };

    const handleToggleSelect = (id: number) => {
        setCartItems(prev => prev.map(item =>
            item.id === id ? { ...item, isSelected: !item.isSelected } : item
        ));
    };

    const handleClearAll = () => {
        if (window.confirm("Bạn có chắc muốn xóa toàn bộ giỏ hàng?")) {
            setCartItems([]);
        }
    };

    const { subtotal, count } = useMemo(() => {
        return cartItems.reduce((acc, item) => {
            if (item.isSelected) {
                acc.subtotal += item.price * item.quantity;
                acc.count += item.quantity;
            }
            return acc;
        }, { subtotal: 0, count: 0 });
    }, [cartItems]);

    const handleCheckout = () => {
        if (count === 0) {
            alert("Vui lòng chọn ít nhất 1 sản phẩm để thanh toán");
            return;
        }
        navigate('/checkout');
    };

    return (
        <div className="cart-page">
            <div className="container py-5">
                <div className="page-header">
                    <h1 className="page-title">Giỏ hàng</h1>
                    <p className="page-subtitle">
                        Bạn đang có <span className="text-highlight">{cartItems.length} sản phẩm</span> trong giỏ hàng
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
                                            onUpdateQuantity={handleUpdateQuantity}
                                            onRemove={handleRemove}
                                            onToggleSelect={handleToggleSelect}
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