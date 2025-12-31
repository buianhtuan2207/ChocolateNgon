import React, { useState, useMemo, useEffect } from 'react';
import './product.scss';

import SidebarFilter from '../../components/SidebarFilter/SidebarFilter';
import SortBar from '../../components/SortBar/SortBar';
import Pagination from '../../components/Pagination/Pagination';
import CardProduct from '../../components/CardProduct/CardProduct';

import { PRODUCTS } from '../../data/products';
import { CATEGORIES, FLAVORS, SHAPES } from '../../data/filters'; // Import data gốc để map

const ITEMS_PER_PAGE = 8;

export default function Products() {
    const [filters, setFilters] = useState({
        category: 'all',
        flavor: 'all',
        shape: 'all'
    });

    const [sortBy, setSortBy] = useState('default');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [filters, sortBy]);

    // --- TÍNH TOÁN SỐ LƯỢNG CHO SIDEBAR ---
    // Logic: Duyệt qua từng item của bộ lọc gốc, đếm xem trong PRODUCTS có bao nhiêu item thỏa mãn
    const categoriesWithCount = useMemo(() => {
        return CATEGORIES.map(cat => {
            let count = 0;
            if (cat.value === 'all') count = PRODUCTS.length;
            else if (cat.value === 'hot') count = PRODUCTS.filter(p => p.isHot).length;
            else if (cat.value === 'best-seller') count = PRODUCTS.filter(p => p.isHot).length; // Giả định
            else count = PRODUCTS.filter(p => p.category === cat.value).length;

            return { ...cat, count };
        });
    }, []); // Chỉ tính 1 lần khi mount vì PRODUCTS tĩnh

    const flavorsWithCount = useMemo(() => {
        return FLAVORS.map(flav => {
            let count = 0;
            if (flav.id === 'all') count = PRODUCTS.length;
            else count = PRODUCTS.filter(p => p.category === flav.id).length;
            return { ...flav, count };
        });
    }, []);

    const shapesWithCount = useMemo(() => {
        return SHAPES.map(shape => {
            let count = 0;
            if (shape.value === 'all') count = PRODUCTS.length;
            else {
                const keyword = shape.value === 'bar' ? 'thanh' : (shape.value === 'box' ? 'hộp' : 'viên');
                count = PRODUCTS.filter(p =>
                    p.title.toLowerCase().includes(keyword) ||
                    p.description.toLowerCase().includes(keyword)
                ).length;
            }
            return { ...shape, count };
        });
    }, []);

    // --- LOGIC LỌC SẢN PHẨM ---
    const processedProducts = useMemo(() => {
        let result = [...PRODUCTS];

        if (filters.category !== 'all') {
            if (filters.category === 'hot') result = result.filter(p => p.isHot);
            else if (filters.category === 'best-seller') result = result.filter(p => p.isHot);
            else result = result.filter(p => p.category === filters.category);
        }

        if (filters.flavor !== 'all') {
            result = result.filter(p => p.category === filters.flavor);
        }

        if (filters.shape !== 'all') {
            const keyword = filters.shape === 'bar' ? 'thanh' : (filters.shape === 'box' ? 'hộp' : '');
            if (keyword) {
                result = result.filter(p =>
                    p.title.toLowerCase().includes(keyword) ||
                    p.description.toLowerCase().includes(keyword)
                );
            }
        }

        if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
        else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
        else result.sort((a, b) => b.id - a.id);

        return result;
    }, [filters, sortBy]);

    // --- PHÂN TRANG ---
    const totalItems = processedProducts.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentProducts = processedProducts.slice(indexOfFirstItem, indexOfLastItem);

    const handleFilterChange = (type: 'category' | 'flavor' | 'shape', value: string) => {
        setFilters(prev => ({ ...prev, [type]: value }));
    };

    return (
        <div className="products-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mb-4">
                        {/* Truyền dữ liệu đã tính count xuống sidebar */}
                        <SidebarFilter
                            categories={categoriesWithCount}
                            flavors={flavorsWithCount}
                            shapes={shapesWithCount}
                            filterState={filters}
                            onFilterChange={handleFilterChange}
                        />
                    </div>

                    <div className="col-lg-9">
                        <SortBar
                            title="Tất cả sản phẩm"
                            sortValue={sortBy}
                            onSortChange={setSortBy}
                        />

                        {currentProducts.length > 0 ? (
                            <>
                                <CardProduct data={currentProducts} />
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            </>
                        ) : (
                            <div className="text-center py-5">
                                <p className="text-muted">Không tìm thấy sản phẩm nào.</p>
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => setFilters({ category: 'all', flavor: 'all', shape: 'all' })}
                                >
                                    Xóa bộ lọc
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}