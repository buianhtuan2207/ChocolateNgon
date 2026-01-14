import React from 'react';
import "./deliveryInfo.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from "../Button/Button";

const DeliveryInfo: React.FC = () => {
    return (
        <div className="right-column-container">
            {/* Khối Thông tin nhận hàng */}
            <div className="info-card delivery-info">
                <h3 className="card-title">Thông tin nhận hàng</h3>

                <div className="info-group">
                    <label>NGƯỜI NHẬN</label>
                    <p className="name">NGUYỄN VĂN AN</p>
                    <p className="phone">0909 123 456</p>
                </div>

                <div className="info-group">
                    <label>ĐỊA CHỈ</label>
                    <p className="address">
                        Số 18, Đường Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh
                    </p>
                </div>

                <div className="info-group">
                    <label>GHI CHÚ ĐƠN HÀNG</label>
                    <p className="note">
                        "Giao giờ hành chính, gọi trước khi giao 30 phút. Gói quà cẩn thận giúp mình nhé shop."
                    </p>
                </div>
            </div>

            {/* Khối Các nút hành động */}
            <div className="action-buttons">
                <Button className="btn-primary-luxury">
                    <FontAwesomeIcon icon="phone" /> LIÊN HỆ HỖ TRỢ
                </Button>
                <Button className="btn-outline-luxury">
                    <FontAwesomeIcon icon="building-columns" /> TẢI HÓA ĐƠN PDF
                </Button>
            </div>

            {/* Khối Cam kết bảo hiểm */}
            <div className="insurance-box">
                <span className="label">BẠN GẶP VẤN ĐỀ?</span>
                <p>Mọi đơn hàng của chúng tôi đều được bảo hiểm 100% trong quá trình vận chuyển.</p>
                <Button variant="text" href="" children="chính sách hỗ trợ"/>
            </div>
        </div>
    );
};

export default DeliveryInfo;