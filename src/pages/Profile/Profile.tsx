import React from 'react';
import ProfileSidebar from '../../components/ProfileSidebar/ProfileSidebar';
import ProfileForm from '../../components/ProfileForm/ProfileForm';

export default function Profile() {
    return (
            <div style={{ backgroundColor: '#f5f5f5', padding: '30px 0', minHeight: '80vh' }}>
                <div className="container">
                    <div className="row">
                        {/* Sidebar (3 cột trên desktop) */}
                        <div className="col-lg-3 mb-4">
                            <ProfileSidebar />
                        </div>

                        {/* Nội dung chính (9 cột trên desktop) */}
                        <div className="col-lg-9">
                            <ProfileForm />
                        </div>
                    </div>
                </div>
            </div>
    );
}