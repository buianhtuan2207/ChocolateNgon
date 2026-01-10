import React, { useState, useMemo, useEffect } from 'react';
import './product.scss';

import SidebarFilter from '../../components/SidebarFilter/SidebarFilter';
import SortBar from '../../components/SortBar/SortBar';
import Pagination from '../../components/Pagination/Pagination';
import CardProduct from '../../components/CardProduct/CardProduct';
import { Product } from '../../data/products';
import { CATEGORIES, FLAVORS, SHAPES } from '../../data/filters';
import Data from '../../data/db.json';

const ITEMS_PER_PAGE = 8;

export default function Products() {
    // 1. Khai báo state
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const [filters, setFilters] = useState({
        category: 'all',
        flavor: 'all',
        shape: 'all'
    });

    const [sortBy, setSortBy] = useState('default');
    const [currentPage, setCurrentPage] = useState(1);

    // 2. Load dữ liệu từ file JSON (Giả lập bất đồng bộ)
    useEffect(() => {
        try {
            // Lấy mảng products từ db.json
            // Ép kiểu 'as unknown as Product[]' để TypeScript nhận diện đúng cấu trúc
            const data = Data.products as unknown as Product[];

            setAllProducts(data);
            setLoading(false);
        } catch (err) {
            console.error("Lỗi load data từ json:", err);
            setLoading(false);
        }
    },[])

    useEffect(() => {
        setCurrentPage(1);
    }, [filters, sortBy]);

    // --- CÁC PHẦN DƯỚI GIỮ NGUYÊN ---

    // Tính toán số lượng cho Sidebar
    const categoriesWithCount = useMemo(() => {
        return CATEGORIES.map(cat => {
            let count = 0;
            if (cat.value === 'all') count = allProducts.length;
            else if (cat.value === 'hot') count = allProducts.filter(p => p.isHot).length;
            else if (cat.value === 'best-seller') count = allProducts.filter(p => p.isHot).length;
            else count = allProducts.filter(p => p.category === cat.value).length;
            return { ...cat, count };
        });
    }, [allProducts]);

    const flavorsWithCount = useMemo(() => {
        return FLAVORS.map(flav => {
            let count = 0;
            if (flav.id === 'all') count = allProducts.length;
            else count = allProducts.filter(p => p.category === flav.id).length;
            return { ...flav, count };
        });
    }, [allProducts]);

    const shapesWithCount = useMemo(() => {
        return SHAPES.map(shape => {
            let count = 0;
            if (shape.value === 'all') count = allProducts.length;
            else {
                const keyword = shape.value === 'bar' ? 'thanh' : (shape.value === 'box' ? 'hộp' : 'viên');
                count = allProducts.filter(p =>
                    p.title.toLowerCase().includes(keyword) ||
                    p.description.toLowerCase().includes(keyword)
                ).length;
            }
            return { ...shape, count };
        });
    }, [allProducts]);

    // Logic lọc sản phẩm
    const processedProducts = useMemo(() => {
        let result = [...allProducts];

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
        else result.sort((a, b) => Number(b.id) - Number(a.id));

        return result;
    }, [allProducts, filters, sortBy]);

    // Phân trang
    const totalItems = processedProducts.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentProducts = processedProducts.slice(indexOfFirstItem, indexOfLastItem);

    const handleFilterChange = (type: 'category' | 'flavor' | 'shape', value: string) => {
        setFilters(prev => ({ ...prev, [type]: value }));
    };

    if (loading) return <div className="container py-5 text-center">Đang tải sản phẩm...</div>;

    return (
        <div className="products-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mb-4">
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