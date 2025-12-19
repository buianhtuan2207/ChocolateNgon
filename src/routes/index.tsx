import React from "react";
import Home from "../pages/Home";

/* Định nghĩa type cho route */
export type AppRoute = {
    path: string;
    component: React.ComponentType;
    layout?: React.ComponentType | null;
};

/* Gán type cho routes */
const publicRoutes: AppRoute[] = [
    {path: "/", component: Home,},
];

const privateRoutes: AppRoute[] = [];

export { publicRoutes, privateRoutes };
