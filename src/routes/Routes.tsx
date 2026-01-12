import React, {JSX} from "react";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Wishlist from "../pages/Wishlist/Wishlist";
import ProductDetailPage from "../pages/ProductDetail/ProductDetail";
import Products from "../pages/Product/Product";
import Profile from "../pages/Profile/Profile";
import {Navigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import Promotion from "../pages/Promotion/Promotion";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import About from "../pages/About/About";

/* Định nghĩa type cho route */
export type AppRoute = {
    path: string;
    component: React.ComponentType;
    layout?: React.ComponentType | null;
};

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { user } = useAuth();
    if (!user) return <Navigate to="/login" replace />;
    return children;
};

/* Gán type cho routes */
const publicRoutes: AppRoute[] = [
    {path: "/", component: Home},
    {path: "/login", component: Login, layout: null},
    {
        path: "/wishlist",
        component: () => (
            <ProtectedRoute>
                <Wishlist />
            </ProtectedRoute>
        ),
    },
    {
        path: "/profile",
        component: () => (
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>
        ),
    },
    {
        path: "/cart",
        component: () => (
            <ProtectedRoute>
                <Cart />
            </ProtectedRoute>
        ),
    },
    {path: "/product", component: Products },
    {path: "/product/:id", component: ProductDetailPage },
    {path: "/promotion", component: Promotion },
    {path: "/checkout" , component: Checkout},
    {path: "/about" , component: About },
];

const privateRoutes: AppRoute[] = [];

export { publicRoutes, privateRoutes };