import React, { useState, useEffect, useMemo } from 'react';
import ProfileSidebar from '../../components/ProfileSidebar/ProfileSidebar';
import Pagination from '../../components/Pagination/Pagination';
import SortBar from '../../components/SortBar/SortBar';
import OrderTable, { OrderData } from '../../components/OrderTable/OrderTable';
import Data from '../../data/db.json'; // Import dữ liệu
import './orderHistory.scss';

export default function OrderHistory() {
    // 1. Lấy dữ liệu từ db.json (Giả lập fetch API)
    // Trong thực tế bạn sẽ lọc theo userId của người đang đăng nhập
    const [allOrders, setAllOrders] = useState<OrderData[]>([]);

    useEffect(() => {
        // Giả lập lấy dữ liệu, ép kiểu về OrderData[]
        const orders = Data.orders as unknown as OrderData[];
        setAllOrders(orders);
    }, []);

    // 2. State cho Sắp xếp và Phân trang
    const [sortValue, setSortValue] = useState('default');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Số đơn hàng mỗi trang

    // 3. Xử lý Logic Sắp xếp
    const sortedOrders = useMemo(() => {
        let sorted = [...allOrders];

        // Hàm helper để parse ngày tháng "dd/mm/yyyy" sang Date object để so sánh
        const parseDate = (dateStr: string) => {
            const [day, month, year] = dateStr.split('/').map(Number);
            return new Date(year, month - 1, day).getTime();
        };

        switch (sortValue) {
            case 'price-asc': // Giá thấp -> cao
                sorted.sort((a, b) => a.total - b.total);
                break;
            case 'price-desc': // Giá cao -> thấp
                sorted.sort((a, b) => b.total - a.total);
                break;
            case 'default': // Mặc định: Mới nhất (Ngày giảm dần)
            default:
                sorted.sort((a, b) => parseDate(b.date) - parseDate(a.date));
                break;
        }
        return sorted;
    }, [allOrders, sortValue]);

    // 4. Xử lý Logic Phân trang
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentOrders = sortedOrders.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);

    // Reset về trang 1 khi thay đổi kiểu sắp xếp
    useEffect(() => {
        setCurrentPage(1);
    }, [sortValue]);

    return (
        <div className="order-history-page py-5">
            <div className="container">
                <div className="row g-5">
                    {/* Sidebar */}
                    <div className="col-lg-3">
                        <ProfileSidebar />
                    </div>

                    {/* Main Content */}
                    <div className="col-lg-9">
                        <div className="content-card shadow-sm p-4 p-lg-5 bg-white">
                            {/* Header & Sort */}
                            <div className="d-flex flex-wrap justify-content-between align-items-end mb-5">
                                <div className="header-text">
                                    <h1 className="page-title h2 mb-2">Lịch sử đơn hàng</h1>
                                </div>

                                <div className="custom-sort-wrapper">
                                    <SortBar
                                        title=""
                                        sortValue={sortValue}
                                        onSortChange={setSortValue}
                                    />
                                </div>
                            </div>

                            {/* Table hiển thị dữ liệu đã phân trang */}
                            {currentOrders.length > 0 ? (
                                <OrderTable orders={currentOrders} />
                            ) : (
                                <div className="text-center py-5 text-muted">
                                    Bạn chưa có đơn hàng nào.
                                </div>
                            )}

                            {/* Pagination */}
                            <div className="d-flex justify-content-end mt-4">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}