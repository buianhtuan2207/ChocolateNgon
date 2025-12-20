import React from 'react';
import './style.scss'; // File này có thể để trống hoặc thêm margin tùy ý
import FilterWidget from '../FilterWidget/FilterWidget';
import FilterMenu from '../FilterMenu/FilterMenu';
import FilterRadio from '../FilterRadio/FilterRadio';
import FilterTag from '../FilterTag/FilterTag';

export default function SidebarFilter() {
    // DATA MẪU
    const categories = [
        { label: "Tất cả sản phẩm", count: 42 },
        { label: "Nổi bật", count: 8, isActive: true },
        { label: "Bán chạy nhất", count: 12 },
        { label: "Quà tặng", count: 5 },
    ];

    const flavors = [
        { id: "f1", label: "Socola Đen 70%" },
        { id: "f2", label: "Socola Đen 90%" },
        { id: "f3", label: "Socola Sữa", isChecked: true, isHighlight: true },
        { id: "f4", label: "Socola Hạnh Nhân" },
        { id: "f5", label: "Matcha Trà Xanh" },
    ];

    const shapes = [
        { label: "Thanh", isActive: true },
        { label: "Hộp quà" },
        { label: "Viên" },
    ];

    return (
        <aside className="sidebar-container">
            <FilterWidget title="Danh mục">
                <FilterMenu items={categories} />
            </FilterWidget>

            <FilterWidget title="Hương vị">
                <FilterRadio name="flavor" items={flavors} />
            </FilterWidget>

            <FilterWidget title="Hình thức">
                <FilterTag items={shapes} />
            </FilterWidget>
        </aside>
    );
}