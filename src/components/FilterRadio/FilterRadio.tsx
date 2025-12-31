import React from 'react';
import './filterRadio.scss';

interface RadioItem {
    id: string;
    label: string;
    isHighlight?: boolean;
}

interface FilterRadioProps {
    name: string;
    items: RadioItem[];
    selectedId?: string; // ID đang chọn
    onChange: (id: string) => void;
}

export default function FilterRadio({name, items, selectedId, onChange}: FilterRadioProps) {
    return (
        <div className="filter-radio d-flex flex-column gap-2">
            {items.map((item) => (
                <div key={item.id} className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name={name}
                        id={item.id}
                        checked={selectedId === item.id} // Control component
                        onChange={() => onChange(item.id)}
                    />
                    <label
                        className={`form-check-label ${item.isHighlight ? 'highlight' : ''}`}
                        htmlFor={item.id}
                    >
                        {item.label}
                    </label>
                </div>
            ))}
        </div>
    );
}