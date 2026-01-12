import React from 'react';
import Icon from '../../components/Icons/Icon';
import "./paymentMethods.scss"
import Data from '../../data/db.json';

type MethodType = 'cod' | 'qr' | 'card';

interface Props {
    selectedMethod: MethodType;
    onSelect: (method: MethodType) => void;
}

export default function PaymentMethods({ selectedMethod, onSelect }: Props) {

    const methods = Data.paymentMethods;

    return (
        <div className="pt-5 border-top">
            <h2 className="h3 mb-4 d-flex align-items-center gap-3">
                Phương thức thanh toán
            </h2>

            <div className="vstack gap-3">
                {methods.map((method) => (
                    <label
                        key={method.id}
                        className={`payment-option d-flex align-items-center p-4 rounded border cursor-pointer transition-all ${
                            selectedMethod === method.id ? 'border-primary bg-primary-subtle' : 'border-secondary'
                        }`}
                        onClick={() => onSelect(method.id as MethodType)}
                    >
                        <input
                            type="radio"
                            name="payment"
                            checked={selectedMethod === method.id}
                            readOnly
                            className="me-3"
                        />
                        <div className="d-flex align-items-center gap-4 flex-grow-1">
                            <Icon icon={method.icon as any} />
                            <div>
                                <div className="fw-bold">{method.title}</div>
                                <div className="text-muted small">{method.description}</div>
                            </div>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
}