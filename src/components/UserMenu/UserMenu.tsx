import React from 'react';
import { Link } from "react-router-dom";
import Icon from "../Icons/Icon";
import "./userMenu.scss";

export default function UserMenu({ isLoggedIn, username }) {
    if (!isLoggedIn) return (
        <Link to="/login" className="user-icon-only">
            <Icon icon="user" />
        </Link>
    );

    return (
        <div className="user-menu-container">
            {/* Phần hiển thị tên luôn xuất hiện */}
            <div className="user-chip">
                <Icon icon="user" className="icons" />
                <span className="name">{username}</span>
            </div>

            {/* Phần Menu thả xuống - Phải nằm trong div dropdown riêng */}
            <div className="user-dropdown-menu">
                <Link to="/account">Thông tin tài khoản</Link>
                <Link to="/logout" className="logout-btn">Đăng xuất</Link>
            </div>
        </div>
    );
}