import React from "react";

const Button = ({
    onClick,
    children,
    className,
    type = "button",
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-colors duration-300 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
