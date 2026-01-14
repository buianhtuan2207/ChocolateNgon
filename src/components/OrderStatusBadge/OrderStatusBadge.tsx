import React from 'react';
import './orderStatusBadge.scss';

// Định nghĩa các trạng thái đơn hàng
export type OrderStatus = 'processing' | 'shipped' | 'delivered' | 'cancelled';

interface OrderStatusBadgeProps {
    status: OrderStatus;
    label: string; // Ví dụ: "Đang xử lý"
}

export default function OrderStatusBadge({ status, label }: OrderStatusBadgeProps) {
    return (
        <div className={`order-status-badge status-${status}`}>
            <span className="dot"></span>
            <span className="text">{label}</span>
        </div>
    );
}