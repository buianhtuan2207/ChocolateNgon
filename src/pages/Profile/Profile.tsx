import React from 'react';
import ProfileSidebar from '../../components/ProfileSidebar/ProfileSidebar';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import './profile.scss';

export default function Profile() {
    return (
        <div className="profile-page-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mb-4">
                        <ProfileSidebar />
                    </div>
                    <div className="col-lg-9">
                        <ProfileForm />
                    </div>
                </div>
            </div>
        </div>
    );
}