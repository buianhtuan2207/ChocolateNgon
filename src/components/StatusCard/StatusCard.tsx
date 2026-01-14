import React from 'react';
import "./statusCard.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const StatusCard = ({ label, value, icon, statusType }) => {
    return (
        <div className={`status-card ${statusType ? `status-card--${statusType}` : ''}`}>
            <span className="status-card__label">
                {label}
            </span>

            <div className="status-card__content">
                {icon && (
                    <div className="status-card__icon-wrapper">
                        <FontAwesomeIcon icon={icon} />
                    </div>
                )}
                <span className="status-card__value">
                    {value}
                </span>
            </div>
        </div>
    );
};

export default StatusCard;