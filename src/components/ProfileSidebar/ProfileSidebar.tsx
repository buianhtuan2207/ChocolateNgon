import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Icon from '../Icons/Icon';
import './profileSidebar.scss';

export default function ProfileSidebar() {
    const { user, logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path: string) => location.pathname === path ? 'active' : '';

    const handleLogoutClick = () => {
        logout();
        navigate('/login'); // Chuyển về trang login sau khi đăng xuất
    };

    if (!user) return null;

    return (
        <aside className="profile-sidebar">
            <div className="user-brief">
                <div className="avatar-wrapper">
                    <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName)}&background=ee4d2d&color=fff`}
                        alt="User Avatar"
                    />
                    <span className="edit-icon"><Icon icon="pen"/></span>
                </div>
                <div className="info">
                    <div className="name">{user.fullName}</div>
                    <div className="rank text-primary"><Icon icon="star"/> Thành viên vàng</div>
                </div>
            </div>

            <nav className="profile-menu">
                <Link to="/profile" className={`menu-item ${isActive('/profile')}`}>
                    <span className="icon"><Icon icon="user" /></span> Thông tin cá nhân
                </Link>
                <Link to="/profile/orders" className={`menu-item ${isActive('/profile/orders')}`}>
                    <span className="icon"><Icon icon="shopping-cart" /></span> Đơn hàng của tôi
                </Link>
                <Link to="/profile/password" className={`menu-item ${isActive('/profile/password')}`}>
                    <span className="icon"><Icon icon="lock" /></span> Đổi mật khẩu
                </Link>
                {/* Đổi thành div hoặc button để bắt sự kiện logout */}
                <div onClick={handleLogoutClick} className="menu-item logout" style={{ cursor: 'pointer' }}>
                    <span className="icon"><Icon icon="arrow-right" /></span> Đăng xuất
                </div>
            </nav>
        </aside>
    );
}