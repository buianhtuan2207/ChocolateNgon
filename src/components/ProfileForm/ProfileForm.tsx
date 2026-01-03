import React from 'react';
import Button from '../Button/Button';
import './profileForm.scss';

export default function ProfileForm() {
    return (
        <div className="profile-form-wrapper">
            <div className="form-header">
                <h2>Hồ sơ của tôi</h2>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>

            <div className="form-body">
                {/* --- CỘT TRÁI: INPUTS --- */}
                <div className="form-inputs">
                    {/* Tên đăng nhập (Static) */}
                    <div className="form-group">
                        <label>Tên đăng nhập</label>
                        <div className="static-text">nhattruong257</div>
                    </div>

                    {/* Họ tên */}
                    <div className="form-group">
                        <label>Họ và tên</label>
                        <div className="input-box">
                            <input type="text" defaultValue="Trần Nhật Trường" />
                        </div>
                    </div>

                    {/* Email - Đã xóa nút Thay đổi */}
                    <div className="form-group">
                        <label>Email</label>
                        <div className="input-box">
                            <input type="text" defaultValue="nhattruong@gmail.com" />
                        </div>
                    </div>

                    {/* SĐT - Đã xóa nút Thay đổi */}
                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <div className="input-box">
                            <input type="text" defaultValue="0912 345 678" />
                        </div>
                    </div>

                    {/* Địa chỉ */}
                    <div className="form-group align-top">
                        <label>Địa chỉ</label>
                        <div className="input-box">
                            <textarea rows={3} defaultValue="12 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh"></textarea>
                        </div>
                    </div>

                    {/* Giới tính */}
                    <div className="form-group">
                        <label>Giới tính</label>
                        <div className="radio-group-wrapper">
                            <label className="radio-item">
                                <input type="radio" name="gender" /> <span>Nam</span>
                            </label>
                            <label className="radio-item">
                                <input type="radio" name="gender" defaultChecked /> <span>Nữ</span>
                            </label>
                            <label className="radio-item">
                                <input type="radio" name="gender" /> <span>Khác</span>
                            </label>
                        </div>
                    </div>

                    {/* Ngày sinh */}
                    <div className="form-group">
                        <label>Ngày sinh</label>
                        <div className="date-selects">
                            <select className="form-select"><option>Ngày 15</option></select>
                            <select className="form-select"><option>Tháng 8</option></select>
                            <select className="form-select"><option>1995</option></select>
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
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVtVnJ7sN3GqGudC85JCaTEv_fYLDD9WKlmBah5pGd7U-LnXU_DaeZ2M5ra_aTK0sKXVnC7fTvC-QAJgs3wbfK2NcWD1OCGo7axCGgCmRNkOvAVRonoPxAI7_p6w2PK23m4wprKix2UMAp8kRkclFZsXAujmDsfwkclyPpTr9El5v9cGjtuAG_uQv0uvedSxvsQoSZzth2sMGU6xVcV_Rxk6potw_ktZNUVpJybW2jlIpCzvTPTXnuigph5sb7zsHPnvmkgbtEsOAK"
                            alt="Current Avatar"/>
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