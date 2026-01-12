import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icons/Icon';
import OrderStatusBadge, { OrderStatus } from '../OrderStatusBadge/OrderStatusBadge';
import './orderTable.scss';

// Định nghĩa kiểu dữ liệu cho 1 đơn hàng
export interface OrderData {
    id: string;
    date: string;
    status: OrderStatus;
    statusLabel: string;
    total: number;
}

interface OrderTableProps {
    orders: OrderData[];
}

export default function OrderTable({ orders }: OrderTableProps) {
    const formatVND = (price: number) => price.toLocaleString('vi-VN') + '₫';

    return (
        <div className="order-table-wrapper">
            {/* Header Row (Ẩn trên mobile) */}
            <div className="order-header d-none d-md-flex">
                <div className="col-head col-id">MÃ ĐƠN HÀNG</div>
                <div className="col-head col-date">NGÀY ĐẶT</div>
                <div className="col-head col-status">TRẠNG THÁI</div>
                <div className="col-head col-total">TỔNG CỘNG</div>
                <div className="col-head col-action text-end">HÀNH ĐỘNG</div>
            </div>

            {/* List Rows */}
            <div className="order-list">
                {orders.map((order) => (
                    <div className="order-row" key={order.id}>
                        <div className="col-cell col-id">
                            <span className="mobile-label d-md-none">Mã: </span>
                            <span className="text-id">{order.id}</span>
                        </div>

                        <div className="col-cell col-date">
                            <span className="mobile-label d-md-none">Ngày: </span>
                            {order.date}
                        </div>

                        <div className="col-cell col-status">
                            <OrderStatusBadge status={order.status} label={order.statusLabel} />
                        </div>

                        <div className="col-cell col-total">
                            <span className="mobile-label d-md-none">Tổng: </span>
                            <span className="price">{formatVND(order.total)}</span>
                        </div>

                        <div className="col-cell col-action text-md-end">
                            <Link to={`/account/orders/${order.id}`} className="btn-view-detail">
                                XEM CHI TIẾT <Icon icon="chevron-right" className="ms-1 small-icon" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}