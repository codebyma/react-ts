import React from "react";
import styles from "./ButtonGroup.module.css";

type ButtonGroupProps = {
    children?: React.ReactNode;
    fixed?: boolean;
    gap?: number;
    size?: "sm" | "md" | "lg" | "";
    align?: "left" | "center" | "right" | "";
};

const ButtonGroup = ({
    children,
    fixed = false,
    gap = 8,
    size = "",
    align = "",
}: ButtonGroupProps) => {
    const sizeClass = styles[size] || "";
    const alignClass = styles[align] || "";
    const fixedClass = fixed ? styles.fixed : "";

    return (
        <div
            className={`${styles.btn_group} ${sizeClass} ${alignClass} ${fixedClass}`}
            style={{ gap: `${gap}px` }}
        >
            {children}
        </div>
    );
};

export default ButtonGroup;