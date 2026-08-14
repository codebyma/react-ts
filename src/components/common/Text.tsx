import React from "react";

/**
 * 범용 텍스트 컴포넌트
 *
 * Props
 * ------
 * as         : 렌더링할 HTML 태그 (기본 "p")
 * size       : "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
 * color      : Tailwind 텍스트 컬러 클래스
 * weight     : "normal" | "medium" | "semibold" | "bold"
 * className  : 추가 커스텀 클래스
 * children   : 텍스트 내용
 * ...rest    : 해당 HTML 태그의 표준 속성
 */

const sizeStyles = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
} as const;

const weightStyles = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
} as const;

type TextSize = keyof typeof sizeStyles;
type TextWeight = keyof typeof weightStyles;

type TextProps<T extends React.ElementType> = {
    as?: T;
    size?: TextSize;
    color?: string;
    weight?: TextWeight;
    className?: string;
    children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "color" | "className" | "children">;

function cn(...classes: (string | undefined | false | null)[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Text<T extends React.ElementType = "p">({
    as,
    size = "md",
    color = "text-slate-700",
    weight = "normal",
    className = "",
    children,
    ...rest
}: TextProps<T>) {
    const Tag = as || "p";

    return (
        <Tag
            className={cn(
                sizeStyles[size],
                color,
                weightStyles[weight],
                className
            )}
            {...rest}
        >
            {children}
        </Tag>
    );
}