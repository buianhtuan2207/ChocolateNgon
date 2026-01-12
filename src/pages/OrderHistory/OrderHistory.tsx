import React, { useState } from 'react';
import ProfileSidebar from '../../components/ProfileSidebar/ProfileSidebar';
import Pagination from '../../components/Pagination/Pagination';
import SortBar from '../../components/SortBar/SortBar'; // Component bạn đã có
import OrderTable, { OrderData } from '../../components/OrderTable/OrderTable';
import './orderHistory.scss';

export default function OrderHistory() {
    // Mock Data
    const mockOrders: OrderData[] = [
        { id: '#ORD-2023-005', date: '24/10/2023', status: 'processing', statusLabel: 'Đang xử lý', total: 1250000 },
        { id: '#ORD-2023-004', date: '15/10/2023', status: 'delivered', statusLabel: 'Đã giao', total: 890000 },
        { id: '#ORD-2023-003', date: '01/10/2023', status: 'delivered', statusLabel: 'Đã giao', total: 2450000 },
        { id: '#ORD-2024-005', date: '24/10/2024', status: 'processing', statusLabel: 'Đang xử lý', total: 1250000 },
        { id: '#ORD-2024-004', date: '15/10/2024', status: 'delivered', statusLabel: 'Đã giao', total: 890000 },
        { id: '#ORD-2024-003', date: '01/10/2024', status: 'delivered', statusLabel: 'Đã giao', total: 2450000 },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [sortValue, setSortValue] = useState('default');

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

                            {/* Table */}
                            <OrderTable orders={mockOrders} />

                            {/* Pagination (Căn phải theo thiết kế) */}
                            <div className="d-flex justify-content-end mt-4">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={4}
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