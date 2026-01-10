import React from 'react';
import './header.scss';
import Icon from '../../../Icons/Icon';
import UserMenu from "../../../UserMenu/UserMenu";
import { Link, NavLink } from "react-router-dom";
import { useWishlist } from "../../../../context/WishlistContext";
import { useAuth } from "../../../../context/AuthContext";
import { useCart } from "../../../../context/CartContext";

export default function Header() {
    const { user } = useAuth();
    const { wishlist } = useWishlist();
    const { totalItems } = useCart();

    return (
        <header className="header shadow-sm">
            <div className="header-container header-inner">
                <Link to="/" className="logo-link">
                    <h2 className="logo">SocolaShop</h2>
                </Link>

                <nav className="menu d-none d-lg-flex">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Trang chủ</NavLink>
                    <NavLink to="/product" className={({ isActive }) => isActive ? "active-link" : ""}>Sản phẩm</NavLink>
                    <NavLink to="/promotion" className={({ isActive }) => isActive ? "active-link" : ""}>Khuyến mại</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>Giới thiệu</NavLink>
                </nav>

                <div className="search-container">
                    <input type="text" placeholder="Tìm kiếm sản phẩm..." />
                    <button className="search-btn">
                        <Icon icon="search" />
                    </button>
                </div>

                <div className="icon-group">
                    <UserMenu isLoggedIn={!!user} username={user?.name} />

                    <Link to="/wishlist" className="icon-link">
                        <Icon icon="heart" />
                        {user && wishlist.length > 0 && (
                            <span className="count-badge">{wishlist.length}</span>
                        )}
                    </Link>

                    <Link to="/cart" className="icon-link">
                        <Icon icon="shopping-cart" />
                        {user && totalItems > 0 && (
                            <span className="count-badge">{totalItems}</span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}