import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../Button/Button';
import './profileForm.scss';

export default function ProfileForm() {
    const { user } = useAuth(); // Lấy trực tiếp 'user' từ AuthState (vì bạn đã spread ...auth)

    // Nếu chưa đăng nhập
    if (!user) {
        return (
            <div className="profile-form-wrapper">
                <p style={{ padding: '20px' }}>Vui lòng đăng nhập để xem thông tin hồ sơ.</p>
            </div>
        );
    }

    return (
        <div className="profile-form-wrapper">
            <div className="form-header">
                <h2>Hồ sơ của tôi</h2>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>

            <div className="form-body">
                {/* --- CỘT TRÁI: INPUTS --- */}
                <div className="form-inputs">
                    {/* Tên đăng nhập */}
                    <div className="form-group">
                        <label>Tên đăng nhập</label>
                        <div className="static-text">{user.name}</div>
                    </div>

                    {/* Họ tên */}
                    <div className="form-group">
                        <label>Họ và tên</label>
                        <div className="input-box">
                            <input type="text" defaultValue={user.fullName} />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label>Email</label>
                        <div className="input-box">
                            <input type="text" defaultValue={user.email} />
                        </div>
                    </div>

                    {/* SĐT */}
                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <div className="input-box">
                            <input type="text" defaultValue={user.phone} />
                        </div>
                    </div>

                    {/* Địa chỉ */}
                    <div className="form-group align-top">
                        <label>Địa chỉ</label>
                        <div className="input-box">
                            <textarea rows={3} defaultValue={user.address}></textarea>
                        </div>
                    </div>

                    {/* Giới tính - Giả định mặc định vì PublicUser chưa có field này */}
                    <div className="form-group">
                        <label>Giới tính</label>
                        <div className="radio-group-wrapper">
                            <label className="radio-item">
                                <input type="radio" name="gender" defaultChecked /> <span>Nam</span>
                            </label>
                            <label className="radio-item">
                                <input type="radio" name="gender" /> <span>Nữ</span>
                            </label>
                            <label className="radio-item">
                                <input type="radio" name="gender" /> <span>Khác</span>
                            </label>
                        </div>
                    </div>

                    {/* Nút Submit */}
                    <div className="form-action">
                        <Button variant="primary" size="medium" href={undefined}>
                            Lưu thay đổi
                        </Button>
                    </div>
                </div>

                {/* --- CỘT PHẢI: AVATAR --- */}
                <div className="form-avatar">
                    <div className="avatar-preview">
                        {/* Hiển thị avatar theo chữ cái đầu của tên nếu không có ảnh */}
                        <img
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName)}&background=ee4d2d&color=fff`}
                            alt="Current Avatar"
                        />
                    </div>
                    <Button
                        variant="text"
                        size="small"
                        className="btn-choose-img"
                        href={undefined}
                    >
                        Chọn ảnh
                    </Button>
                    <div className="avatar-desc">
                        Dụng lượng file tối đa 1 MB<br/>Định dạng: .JPEG, .PNG
                    </div>
                </div>
            </div>
        </div>
    );
}