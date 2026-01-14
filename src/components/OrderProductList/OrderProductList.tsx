import React from 'react';
import './orderProductList.scss';

interface ProductItem {
    id: number;
    name: string;
    subName: string;
    quantity: number;
    price: number;
    image: string;
}

const OrderProductList: React.FC = () => {
    const products: ProductItem[] = [
        {
            id: 1,
            name: "Hộp Quà Socola Valentine Luxury Edition",
            subName: "HỘP 24 VIÊN • RƯỢU RHUM",
            quantity: 1,
            price: 1250000,
            image: "/assets/img/products/socola-hop-2.png"
        },
        {
            id: 2,
            name: "Nama Chocolate Matcha Premium",
            subName: "TRÀ XANH NHẬT BẢN",
            quantity: 2,
            price: 900000,
            image: "/assets/img/category/classic.png"
        }
    ];

    return (
        <div className="order-products-card">
            <div className="card-header">
                <h3>Sản phẩm trong đơn</h3>
                <span className="item-count">3 MÓN</span>
            </div>

            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <div className="product-info">
                            <img src={product.image} alt={product.name} />
                            <div className="details">
                                <h4>{product.name}</h4>
                                <span className="sub-name">{product.subName}</span>
                                <p className="qty">Số lượng: {product.quantity.toString().padStart(2, '0')}</p>
                            </div>
                        </div>
                        <div className="product-price">
                            {product.price.toLocaleString('vi-VN')}₫
                        </div>
                    </div>
                ))}
            </div>

            <div className="order-summary">
                <div className="summary-line">
                    <span>Tạm tính</span>
                    <span>2.150.000₫</span>
                </div>
                <div className="summary-line">
                    <span>Phí vận chuyển (Hỏa tốc)</span>
                    <span>300.000₫</span>
                </div>
                <div className="total-line">
                    <span>Tổng thanh toán</span>
                    <span className="total-price">2.450.000₫</span>
                </div>
            </div>
        </div>
    );
};

export default OrderProductList;