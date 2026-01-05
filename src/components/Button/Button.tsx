import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    // Thêm "danger" để dùng cho trang Khuyến mãi
    variant?: "primary" | "secondary" | "text" | "large" | "danger";
    size?: "small" | "medium" | "large";
    className?: string;
    href?: string;
}

export default function Button({
                                   children,
                                   variant = "primary",
                                   size = "medium",
                                   className = "",
                                   href,
                                   type = "button",
                                   ...props
                               }: ButtonProps) {
    const classes = `c-btn c-btn--${variant} ${size ? `c-btn--${size}` : ""} ${className}`.trim();

    if (href) {
        const isExternal = href.startsWith("http") || href.startsWith("//");

        if (isExternal) {
            return (
                <a href={href} className={classes} target="_blank" rel="noreferrer">
                    {children}
                </a>
            );
        }

        return (
            <Link to={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classes} {...props}>
            {children}
        </button>
    );
}