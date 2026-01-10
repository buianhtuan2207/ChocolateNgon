import React from "react";
import "./inputField.scss";

const InputField = ({
                        label,
                        type = "text",
                        name,
                        placeholder,
                        value,
                        onChange,
                        icon: Icon,
                        error
                    }) => {
    return (
        <div className={`inputGroup ${error ? "has-error" : ""}`}>
            {label && <label htmlFor={name}>{label}</label>}

            <div className="inputWrapper">
                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />

                {Icon && <Icon className="icon" size={20} />}
            </div>

            {error && <span className="error-text">{error}</span>}
        </div>
    );
};

export default InputField;