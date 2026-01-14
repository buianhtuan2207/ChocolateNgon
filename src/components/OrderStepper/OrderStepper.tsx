import React from 'react';
import "./orderStepper.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const OrderStepper = ({ currentStep }) => {
    const steps = [
        { id: 1, label: 'Đã đặt', date: '20/10', icon: 'check' },
        { id: 2, label: 'Chuẩn bị', date: '21/10', icon: 'box' },
        { id: 3, label: 'Đang giao', date: '22/10', icon: 'truck-fast' },
        { id: 4, label: 'Hoàn thành', date: 'Dự kiến 24/10', icon: 'home' },
    ];

    return (
        <div className="order-stepper">
            {steps.map((step, index) => {
                const isCompleted = step.id < currentStep;
                const isActive = step.id === currentStep;

                return (
                    <div key={step.id} className={`step ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}>
                        <div className="icon-box">
                            <FontAwesomeIcon icon={step.icon as any} />
                        </div>
                        <span className="step-label">{step.label}</span>
                        <span className="step-date">{step.date}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default OrderStepper;