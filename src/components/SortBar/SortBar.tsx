import React from 'react';
import './sortbar.scss';

interface SortBarProps {
    title: string;
    sortValue: string;
    onSortChange: (value: string) => void;
    totalResult: number; // Hiển thị số lượng tìm thấy cho chuyên nghiệp
}

export default function SortBar({ title, sortValue, onSortChange, totalResult }: SortBarProps) {
    return (
        <div className="sort-bar d-flex justify-content-between align-items-center mb-4">
            <div>
                <h3 className="section-title">{title}</h3>
                <span className="text-muted small">Tìm thấy {totalResult} sản phẩm</span>
            </div>

            <div className="sort-actions d-flex align-items-center gap-2">
                <span className="label text-muted small">Sắp xếp:</span>
                <select
                    className="form-select form-select-sm shadow-sm"
                    value={sortValue}
                    onChange={(e) => onSortChange(e.target.value)}
                >
                    <option value="default">Mới nhất</option>
                    <option value="price-asc">Giá thấp - cao</option>
                    <option value="price-desc">Giá cao - thấp</option>
                </select>
            </div>
        </div>
    );
}