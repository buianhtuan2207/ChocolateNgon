import React from 'react';
import './header.scss';
import Icon from '../../../Icons/Icon';
import UserMenu from "../../../UserMenu/UserMenu";
import { Link, NavLink } from "react-router-dom";
import { useWishlist } from "../../../../context/WishlistContext";
import {useAuth} from "../../../../context/AuthContext";


export default function Header() {
    const { user } = useAuth();
    const { wishlist } = useWishlist();

    return (
        <header className="header shadow-sm">
            <div className="container header-inner">
                {/* Logo -> Về trang chủ */}
                <Link to="/" className="logo-link">
                    <h2 className="logo">SocolaShop</h2>
                </Link>

                {/* Nav Menu -> Điều hướng các trang */}
                <nav className="menu d-none d-lg-flex">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Trang chủ</NavLink>
                    <NavLink to="/product" className={({ isActive }) => isActive ? "active-link" : ""}>Sản phẩm</NavLink>
                    <NavLink to="/promotions" className={({ isActive }) => isActive ? "active-link" : ""}>Khuyến mại</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>Giới thiệu</NavLink>
                </nav>

                {/* Search Box */}
                <div className="search-container">
                    <input type="text" placeholder="Tìm kiếm sản phẩm..." />
                    <button className="search-btn">
                        <Icon icon="search" />
                    </button>
                </div>

                {/* Icons Group */}
                <div className="icon-group">
                    <UserMenu
                        isLoggedIn={!!user}
                        username={user?.name}
                    />

                    {/* Wishlist -> Đến trang yêu thích */}
                    <Link to="/wishlist" className="icon-link">
                        <Icon icon="heart" />

                        {user && wishlist.length > 0 && (
                            <span className="count-badge">
                                {wishlist.length}
                            </span>
                        )}
                    </Link>

                    {/* Cart -> Đến trang giỏ hàng */}
                    <Link to="/cart" className="icon-link">
                        <Icon icon="shopping-cart" />
                        <span className="count-badge">0</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}