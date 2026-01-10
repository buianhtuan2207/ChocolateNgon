// src/routes/AppRouter.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { publicRoutes, privateRoutes } from './Routes'; // import mảng từ file Routes.tsx cùng thư mục

const AppRouter = () => {
    return (
        <Routes>
            {/* Public routes */}
            {publicRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                />
            ))}

            {/* Private routes */}
            {privateRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                />
            ))}

            {/* Redirect nếu không tìm thấy */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRouter;