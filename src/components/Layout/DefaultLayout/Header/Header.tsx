import React from 'react';
import './style.scss';
import Icon from '../../../Icons/Icon';
import UserMenu from "../../../UserMenu/UserMenu";
import { Link } from "react-router-dom";

export default function Header() {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    return (
        <header className="header shadow-sm">
            <div className="container header-inner">
                {/* Logo */}
                <Link to="/" className="logo-link">
                    <h2 className="logo">SocolaShop</h2>
                </Link>

                {/* Nav Menu */}
                <nav className="menu d-none d-lg-flex">
                    <Link to="/">Home</Link>
                    <Link to="#">Products</Link>
                    <Link to="#">Promotions</Link>
                    <Link to="#">About</Link>
                </nav>

                {/* Search Box - Gộp khối */}
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
                    <Link to="/wishlist" className="icon-link">
                        <Icon icon="heart" />
                        <span className="count-badge">0</span>
                    </Link>
                    <div className="icon-link">
                        <Icon icon="shopping-cart" />
                        <span className="count-badge">0</span>
                    </div>
                </div>
            </div>
        </header>
    );
}