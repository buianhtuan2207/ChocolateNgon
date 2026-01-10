import React, { useEffect } from 'react';
import './toast.scss';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
    message: string;
    type?: ToastType;
    onClose?: () => void;
    duration?: number;
}

const Toast: React.FC<ToastProps> = ({
                                         message,
                                         type = 'success',
                                         onClose,
                                         duration = 3000
                                     }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (onClose) onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className={`custom-toast toast-${type}`}>
            <div className="toast-icon">
                {type === 'success' ? '✓' : type === 'error' ? '!' : 'i'}
            </div>
            <div className="toast-content">
                <p className="toast-message">{message}</p>
            </div>
            <button className="toast-close" onClick={onClose}>×</button>
        </div>
    );
};

export default Toast;