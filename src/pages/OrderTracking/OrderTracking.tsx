import React from 'react';
import "./orderTracking.scss"
import StatusCard from "../../components/StatusCard/StatusCard";
import OrderStepper from "../../components/OrderStepper/OrderStepper";
import OrderHistory from "../../components/OrderHistory/OrderHistory";

const OrderTracking = () => {
    return (
        <div className="orderTracking-page">
            <div className="order-tracking container">
                <div className="order-tracking-header">
                    <h1>Theo dõi đơn hàng</h1>
                    <p className="order-meta">
                        Mã vận đơn: <strong>#CHOC-8829-2023</strong> | Đặt ngày 20/10/2023
                    </p>
                </div>
                <div className="left">
                    <div className="status-col col-1">
                        <StatusCard label="Trạng Thái" icon="truck-fast" value="Đang vận chuyển" statusType="action"/>
                        <StatusCard label="Dự kiến giao" value="3 ngày giao tới" icon="Calender" statusType={undefined}/>
                        <StatusCard label="Đơn vị vận chuyển" value="giaohangnhanh" icon="box" statusType={undefined}/>
                    </div>
                    <div className="tracking-col col-2">
                        <h3>Lộ trình vận chuyển</h3>
                        <OrderStepper currentStep={3}/>
                        <div className="history-list">
                            <OrderHistory/>
                        </div>
                    </div>

                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
}
export default OrderTracking;