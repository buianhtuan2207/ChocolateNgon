import React from 'react';
import './filterMenu.scss';

interface MenuItem {
    label: string;
    value: string; // để định danh (ví dụ: 'all', 'hot', 'gift')
    count?: number;
}

interface FilterMenuProps {
    items: MenuItem[];
    activeValue?: string; // Giá trị đang được chọn
    onSelect: (value: string) => void; // Hàm callback
}

export default function FilterMenu({ items, activeValue, onSelect }: FilterMenuProps) {
    return (
        <ul className="filter-menu list-unstyled mb-0">
            {items.map((item, index) => (
                <li
                    key={index}
                    className={`menu-item ${activeValue === item.value ? 'active' : ''}`}
                    onClick={() => onSelect(item.value)}
                >
                    <span className="label">{item.label}</span>
                    {item.count !== undefined && (
                        <span className="count">{item.count}</span>
                    )}
                </li>
            ))}
        </ul>
    );
}