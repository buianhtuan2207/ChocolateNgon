import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../Icons/Icon';
import './profileSidebar.scss';

export default function ProfileSidebar() {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path ? 'active' : '';

    // Giả lập user
    const user = { name: "Nguyễn Thị A", avatar: "/assets/img/user-avatar.png" };

    return (
        <aside className="profile-sidebar">
            <div className="user-brief">
                <div className="avatar-wrapper">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVtVnJ7sN3GqGudC85JCaTEv_fYLDD9WKlmBah5pGd7U-LnXU_DaeZ2M5ra_aTK0sKXVnC7fTvC-QAJgs3wbfK2NcWD1OCGo7axCGgCmRNkOvAVRonoPxAI7_p6w2PK23m4wprKix2UMAp8kRkclFZsXAujmDsfwkclyPpTr9El5v9cGjtuAG_uQv0uvedSxvsQoSZzth2sMGU6xVcV_Rxk6potw_ktZNUVpJybW2jlIpCzvTPTXnuigph5sb7zsHPnvmkgbtEsOAK"
                        alt="Current Avatar"/>
                    <span className="edit-icon"><Icon icon="pen"/></span>
                </div>
                <div className="info">
                    <div className="name">{user.name}</div>
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
                <Link to="/logout" className="menu-item logout">
                    <span className="icon"><Icon icon="arrow-right" /></span> Đăng xuất
                </Link>
            </nav>
        </aside>
    );
}