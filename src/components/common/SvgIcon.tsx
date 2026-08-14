import React from "react";
import { SvgIcons } from "./SvgIcons";
import styles from "./SvgIcon.module.css";

type SvgIconProps = React.SVGProps<SVGSVGElement> & {
    name: keyof typeof SvgIcons;
    size?: number | string;
    color?: string;
};

const SvgIcon = ({
    name,
    size = 24,
    color = "currentColor",
    ...props
}: SvgIconProps) => {
    const SvgIconComponent = SvgIcons[name];

    if (!SvgIconComponent) return null;

    return (
        <SvgIconComponent
            width={size}
            height={size}
            fill={color}
            className={styles.icon}
            {...props}
        />
    );
};

export default SvgIcon;