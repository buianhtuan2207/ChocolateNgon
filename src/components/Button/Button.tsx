import React from "react";
import "./button.scss";

export default function Button({
                                   children,
                                   variant = "primary",
                                   size = "medium",
                                   className = "",
                                   href,
                                   ...props
                               }) {
    const classes = `c-btn c-btn--${variant} ${size ? `c-btn--${size}` : ""} ${className}`.trim();

    return href ? (
        <a href={href} className={classes} {...props}>
            {children}
        </a>
    ) : (
        <button type="button" className={classes} {...props}>
            {children}
        </button>
    );
}
