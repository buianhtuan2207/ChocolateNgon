import React from 'react';
import './style.scss';

interface SortBarProps {
    title: string;
}

export default function SortBar({ title }: SortBarProps) {
    return (
        <div className="sort-bar d-flex justify-content-between align-items-center mb-4">
            <h3 className="section-title">{title}</h3>

            <div className="sort-actions d-flex align-items-center gap-2">
                <span className="label text-muted small">Sắp xếp:</span>
                <select className="form-select form-select-sm shadow-sm">
                    <option>Mới nhất</option>
                    <option>Giá thấp - cao</option>
                    <option>Giá cao - thấp</option>
                </select>
            </div>
        </div>
    );
}