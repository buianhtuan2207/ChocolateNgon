import React from "react";
import "./style.scss"; 

export default function Button({
                                   children,
                                   variant = "primary",   // primary | secondary | outline | text | danger
                                   size = "medium",       // small | medium | large
                                   className = "",
                                   href = "",
                                   ...props
                               }) {
    // Tạo class động
    const classes = `c-btn c-btn--${variant} c-btn--${size} ${className}`.trim();


    // Nếu có href → render thẻ <a>, không thì render <button>
    return href ? (
        <a href={href} className={classes} {...props}>{children}</a>
    ) : (
        <button type="button" className={classes} {...props}>{children}</button>
    );
}