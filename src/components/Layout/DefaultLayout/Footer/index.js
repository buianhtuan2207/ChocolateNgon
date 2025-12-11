import React from 'react';
import './style.scss';
import Icon from '../../../Icons';
import Icons from "../../../Icons";

export default function Footer() {
    return (
        <footer className="footer text-white">
            <div className="footer-top container py-5">

                <div className="row">

                    {/* Logo + Mô tả */}
                    <div className="col-md-4 mb-4">
                        <h4 className="footer-logo">SocolaShop</h4>
                        <p className="mt-3">
                            Cung cấp socola cao cấp – nguyên chất – nhập khẩu.
                            Quà tặng sang trọng cho các dịp lễ, sinh nhật và sự kiện.
                        </p>
                    </div>

                    {/* Liên kết nhanh */}
                    <div className="col-md-2 mb-4">
                        <h6 className="footer-title">Danh mục</h6>
                        <ul className="footer-list">
                            <li><a href="#">Socola Đen</a></li>
                            <li><a href="#">Socola Sữa</a></li>
                            <li><a href="#">Socola Nguyên Chất</a></li>
                            <li><a href="#">Hộp Quà Socola</a></li>
                        </ul>
                    </div>

                    {/* Hỗ trợ */}
                    <div className="col-md-3 mb-4">
                        <h6 className="footer-title">Hỗ trợ</h6>
                        <ul className="footer-list">
                            <li><a href="#">Về Chúng Tôi</a></li>
                            <li><a href="#">Chính Sách Đổi Trả</a></li>
                            <li><a href="#">Chính Sách Bảo Mật</a></li>
                            <li><a href="#">Phương Thức Thanh Toán</a></li>
                        </ul>
                    </div>

                    {/* Liên hệ */}
                    <div className="col-md-3 mb-4">
                        <h6 className="footer-title">Liên hệ</h6>
                        <p><i className="fas fa-home me-2"></i> 12 Nguyễn Huệ, Quận 1, TP.HCM</p>
                        <p><i className="fas fa-envelope me-2"></i> contact@socolashop.vn</p>
                        <p><i className="fas fa-phone me-2"></i> 0909 123 456</p>

                        {/* Social */}
                        <div className="social-icons mt-3">
                            <a href="#"><Icons icon={['fab', 'facebook-f']} /></a>
                            <a href="#"><Icons icon={['fab', 'instagram']} /></a>
                            <a href="#"><Icons icon={['fab', 'tiktok']} /></a>
                            <a href="#"><Icons icon={['fab', 'youtube']} /></a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="footer-bottom text-center py-3">
                © {new Date().getFullYear()} SocolaShop – All Rights Reserved.
            </div>
        </footer>
    );
}
