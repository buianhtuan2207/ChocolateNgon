import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Icon from "../Icons/Icon";
import "./userMenu.scss";
import {useAuth} from "../../context/AuthContext";

interface UserMenuProps {
    isLoggedIn: boolean;
    username?: string;
}

export default function UserMenu({ isLoggedIn, username }: UserMenuProps) {
    const { logout } = useAuth(); // Lấy hàm logout từ Context
    const navigate = useNavigate();

    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault(); // Rất quan trọng để không bị nhảy link bậy

        // 1. Thực hiện xóa state trong Context & LocalStorage
        logout();

        // 2. Ép buộc điều hướng về trang chủ
        // Sử dụng replace: true để người dùng không thể nhấn "Back" quay lại trạng thái cũ
        navigate("/", { replace: true });

        // Lưu ý: Nếu bạn vẫn bị đẩy về Login, hãy kiểm tra xem Route "/"
        // của bạn có đang bị bọc bởi ProtectedRoute hay không.
    };

    if (!isLoggedIn) return (
        <Link to="/login" className="user-icon-only">
            <Icon icon="user" />
        </Link>
    );

    return (
        <div className="user-menu-container">
            <div className="user-chip">
                <Icon icon="user" className="user-icon" />
                <span className="name">{username || "User"}</span>
            </div>

            <div className="user-dropdown-menu">
                <Link to="/account">Thông tin tài khoản</Link>
                {/* Dùng button hoặc thẻ a đều được, nhưng quan trọng là gọi logout() */}
                <button
                    type="button"
                    className="logout-btn-link"
                    onClick={handleLogout}
                    // style={{
                    //     color: '#d32f2f',
                    //     border: 'none',
                    //     background: 'none',
                    // }}
                >
                    Đăng xuất
                </button>
            </div>
        </div>
    );
}