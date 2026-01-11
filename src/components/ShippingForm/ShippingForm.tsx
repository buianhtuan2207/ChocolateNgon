import React from 'react';
import InputField from '../../components/InputField/inputField';

interface Props {
    formData: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ShippingForm({ formData, onChange }: Props) {
    return (
        <div className="mb-5">
            <h2 className="h3 mb-4 d-flex align-items-center gap-3">
                Thông tin giao hàng
            </h2>

            <div className="row g-4">
                <div className="col-md-6">
                    <InputField label="Họ và tên" name="fullName" placeholder="Nguyễn Văn A" value={formData.fullName}
                                onChange={onChange} icon={undefined} error={undefined} />
                </div>
                <div className="col-md-6">
                    <InputField label="Số điện thoại" name="phone" type="tel" placeholder="0901234567"
                                value={formData.phone} onChange={onChange} icon={undefined} error={undefined} />
                </div>
                <div className="col-12">
                    <InputField label="Email (để nhận hóa đơn)" name="email" type="email"
                                placeholder="email@example.com" value={formData.email} onChange={onChange}
                                icon={undefined} error={undefined} />
                </div>
                <div className="col-12">
                    <InputField label="Địa chỉ chi tiết" name="address" placeholder="Số nhà, tên đường, tòa nhà"
                                value={formData.address} onChange={onChange} icon={undefined} error={undefined} />
                </div>
                <div className="col-md-6">
                    <InputField label="Tỉnh / Thành phố" name="province" placeholder="Chọn tỉnh/thành"
                                value={formData.province} onChange={onChange} icon={undefined} error={undefined} />
                </div>
                <div className="col-md-6">
                    <InputField label="Quận / Huyện" name="district" placeholder="Chọn quận/huyện"
                                value={formData.district} onChange={onChange} icon={undefined} error={undefined} />
                </div>
                <div className="col-12">
                    <InputField label="Ghi chú giao hàng (Tùy chọn)" name="note"
                                placeholder="ghi ..." value={formData.note} onChange={onChange}
                                icon={undefined} error={undefined} />
                </div>
            </div>
        </div>
    );
}