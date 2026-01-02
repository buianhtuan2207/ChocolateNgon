import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "text" | "large";
    size?: "small" | "medium" | "large";
    className?: string;
    href?: string;
    // ...props sẽ bao gồm type, onClick, disabled, v.v.
}

export default function Button({
                                   children,
                                   variant = "primary",
                                   size = "medium",
                                   className = "",
                                   href,
                                   type = "button", // Mặc định là button, nhưng có thể truyền vào "submit"
                                   ...props
                               }: ButtonProps) {
    const classes = `c-btn c-btn--${variant} ${size ? `c-btn--${size}` : ""} ${className}`.trim();

    // Nếu có href, kiểm tra xem là link nội bộ hay link ngoài
    if (href) {
        const isExternal = href.startsWith("http") || href.startsWith("//");

        if (isExternal) {
            return (
                <a href={href} className={classes} target="_blank" rel="noreferrer">
                    {children}
                </a>
            );
        }

        // Dùng Link của react-router-dom để không bị reload trang
        return (
            <Link to={href} className={classes}>
                {children}
            </Link>
        );
    }

    // Trả về thẻ button bình thường
    return (
        <button type={type} className={classes} {...props}>
            {children}
        </button>
    );
}