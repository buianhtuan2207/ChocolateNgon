import React, { useState, useMemo, useEffect } from 'react';
import './product.scss';

import SidebarFilter from '../../components/SidebarFilter/SidebarFilter';
import SortBar from '../../components/SortBar/SortBar';
import Pagination from '../../components/Pagination/Pagination';
import CardProduct from '../../components/CardProduct/CardProduct';

import { PRODUCTS, Product } from '../../data/products';

// Số sản phẩm trên mỗi trang
const ITEMS_PER_PAGE = 6;

export default function Products() {
    // 1. STATE QUẢN LÝ
    const [filters, setFilters] = useState({
        category: 'all', // all, hot, dark, milk...
        flavor: 'all',   // Dùng trường 'category' trong data để map
        shape: 'all'     // Dùng tạm text search trong description
    });

    const [sortBy, setSortBy] = useState('default');
    const [currentPage, setCurrentPage] = useState(1);

    // Reset về trang 1 mỗi khi đổi bộ lọc
    useEffect(() => {
        setCurrentPage(1);
    }, [filters, sortBy]);

    // 2. LOGIC LỌC VÀ SẮP XẾP (Sử dụng useMemo để tối ưu hiệu năng)
    const processedProducts = useMemo(() => {
        let result = [...PRODUCTS];

        // --- BƯỚC 1: LỌC (FILTER) ---

        // Lọc theo Danh mục (Sidebar menu)
        if (filters.category !== 'all') {
            if (filters.category === 'hot') {
                result = result.filter(p => p.isHot);
            } else if (filters.category === 'best-seller') {
                // Giả định logic bán chạy (hoặc thêm field isBestSeller)
                result = result.filter(p => p.isHot);
            } else {
                // Lọc theo category của data (dark, milk, nut...)
                result = result.filter(p => p.category === filters.category);
            }
        }

        // Lọc theo Hương vị (Radio) - Map với field category của Product
        if (filters.flavor !== 'all') {
            result = result.filter(p => p.category === filters.flavor);
        }

        // Lọc theo Hình thức (Tag) - Search text trong title hoặc description
        if (filters.shape !== 'all') {
            const keyword = filters.shape === 'bar' ? 'thanh' : (filters.shape === 'box' ? 'hộp' : '');
            if (keyword) {
                result = result.filter(p =>
                    p.title.toLowerCase().includes(keyword) ||
                    p.description.toLowerCase().includes(keyword)
                );
            }
        }

        // --- BƯỚC 2: SẮP XẾP (SORT) ---
        if (sortBy === 'price-asc') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            result.sort((a, b) => b.price - a.price);
        } else {
            // Mặc định: Mới nhất (Giả sử ID lớn là mới)
            result.sort((a, b) => b.id - a.id);
        }

        return result;
    }, [filters, sortBy]);

    // 3. LOGIC PHÂN TRANG (PAGINATION)
    const totalItems = processedProducts.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

    // Cắt danh sách sản phẩm cho trang hiện tại
    const currentProducts = processedProducts.slice(indexOfFirstItem, indexOfLastItem);

    // 4. CÁC HÀM XỬ LÝ SỰ KIỆN
    const handleFilterChange = (type: 'category' | 'flavor' | 'shape', value: string) => {
        setFilters(prev => ({ ...prev, [type]: value }));
    };

    return (
        <div className="products-page">
            <div className="container">
                <div className="row">

                    {/* CỘT TRÁI: SIDEBAR */}
                    <div className="col-lg-3 mb-4">
                        <SidebarFilter
                            filterState={filters}
                            onFilterChange={handleFilterChange}
                        />
                    </div>

                    {/* CỘT PHẢI: LIST SẢN PHẨM */}
                    <div className="col-lg-9">

                        {/* Tiêu đề & Sắp xếp */}
                        <SortBar
                            title="Tất cả sản phẩm"
                            sortValue={sortBy}
                            onSortChange={setSortBy}
                            totalResult={totalItems}
                        />

                        {/* Kiểm tra nếu không có sản phẩm */}
                        {currentProducts.length > 0 ? (
                            <>
                                {/* Lưới sản phẩm */}
                                <CardProduct data={currentProducts} />

                                {/* Phân trang */}
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            </>
                        ) : (
                            <div className="text-center py-5">
                                <p className="text-muted">Không tìm thấy sản phẩm nào phù hợp.</p>
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