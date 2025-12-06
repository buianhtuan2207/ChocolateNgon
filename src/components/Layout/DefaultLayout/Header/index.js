import React from 'react';
import './style.scss';
import Icon from '../../../Icons';

export default function Header() {
    return (
        <header className="header shadow-sm">
            <div className="container d-flex justify-content-between align-items-center py-2">
                <h2 className="logo">SocolaShop</h2>

                <nav className="menu d-none d-md-flex gap-4">
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">Promotions</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>

                <div className="search-box">
                    <input type="text" placeholder="Search" />
                    <Icon icon="search" className="icon-search" />
                </div>

                <div className="icon-box d-flex gap-3">
                    <Icon icon="shopping-cart" className="icons" />
                    <Icon icon="user" className="icons" />
                </div>
            </div>
        </header>
    );
}
