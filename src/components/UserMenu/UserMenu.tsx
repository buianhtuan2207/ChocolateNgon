import React from 'react';
import { Link } from "react-router-dom";
import Icon from "../Icons/Icon";
import "./userMenu.scss";

export default function UserMenu({ isLoggedIn, username }) {
    // Hàm xử lý đăng xuất
    const handleLogout = (e) => {
        e.preventDefault(); // Ngăn trang bị load lại theo kiểu mặc định của thẻ a

        // 1. Xóa thông tin user trong localStorage
        localStorage.removeItem("user");

        // 2. Chuyển hướng về trang chủ hoặc trang login
        // Bạn có thể dùng window.location.href để ép trình duyệt load lại toàn bộ
        // giúp Header cập nhật trạng thái mới nhất ngay lập tức.
        window.location.href = "/";
    };

    if (!isLoggedIn) return (
        <Link to="/login" className="user-icon-only">
            <Icon icon="user" />
        </Link>
    );

    return (
        <div className="user-menu-container">
            {/* Phần hiển thị tên luôn xuất hiện */}
            <div className="user-chip">
                <Icon icon="user" className="user-icon" />
                <span className="name">{username}</span>
            </div>

            {/* Phần Menu thả xuống - Phải nằm trong div dropdown riêng */}
            <div className="user-dropdown-menu">
                <Link to="/account">Thông tin tài khoản</Link>
                <a href="#" className="logout-btn" onClick={handleLogout}>
                    Đăng xuất
                </a>
            </div>
        </div>
    );
}