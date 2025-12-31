import React from 'react';
import './pagination.scss';
import Icon from '../Icons/Icon';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null; // Nếu chỉ có 1 trang thì ẩn đi

    // Tạo mảng số trang [1, 2, 3...]
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="pagination-wrapper mt-5 d-flex justify-content-center gap-2">
            <button
                className="btn-page"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <Icon icon="chevron-left" />
            </button>

            {pages.map(page => (
                <button
                    key={page}
                    className={`btn-page ${page === currentPage ? 'active' : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            <button
                className="btn-page"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <Icon icon="chevron-right" />
            </button>
        </div>
    );
}