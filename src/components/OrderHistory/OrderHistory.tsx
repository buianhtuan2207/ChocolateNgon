import React from 'react';
import "./orderHistory.scss"
import Button from "../Button/Button";

interface OrderHistoryItemProps {
    title: string;
    time: string;
    desc?: string;
    active?: boolean;
}

const OrderHistoryItem: React.FC<OrderHistoryItemProps> = ({ title, time, desc, active }) => (
    <div className={`history-item ${active ? 'active' : ''}`}>
        <div className="history-content">
            <div className="history-header">
                <span className="title">{title}</span>
                <span className="time">{time}</span>
            </div>
            {desc && <p className="desc">{desc}</p>}
        </div>
    </div>
);

const OrderHistory = () => {
    return (
        <div className="history-list">
            <OrderHistoryItem
                title="Đã rời kho trung chuyển phía Nam"
                time="14:30 - 22/10/2023"
                desc="Bưu kiện đang trên đường đến trạm phát gần nhất tại Quận 1, TP. Hồ Chí Minh."
                active={true}
            />
            <OrderHistoryItem
                title="Nhập kho tổng"
                time="09:15 - 22/10/2023"
                desc="Đã kiểm tra chất lượng bảo quản lạnh trước khi xuất kho."
                active={undefined}
            />
            <Button className="view-all-btn" variant="text" >Xem toàn bộ hành trình</Button>
        </div>
    );
};

export default OrderHistory;