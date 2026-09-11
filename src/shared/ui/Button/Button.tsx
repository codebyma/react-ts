import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    /** 버튼 스타일 종류 */
    variant?: ButtonVariant;
    /** 버튼 크기 */
    size?: ButtonSize;
    /** 텍스트 없이 아이콘만 표시 (정사각형 형태로 렌더링) */
    iconOnly?: boolean;
    /** 왼쪽에 배치할 아이콘 */
    leftIcon?: ReactNode;
    /** 오른쪽에 배치할 아이콘 (iconOnly인 경우 무시) */
    rightIcon?: ReactNode;
    /** 버튼 내부 콘텐츠 (iconOnly인 경우 아이콘 하나만 전달) */
    children?: ReactNode;
    /** 가로 전체 너비 사용 여부 */
    fullWidth?: boolean;
    /** 로딩 상태 (클릭 방지 + 로딩 표시) */
    loading?: boolean;
}

export const Button = ({
    variant = 'primary',
    size = 'md',
    iconOnly = false,
    leftIcon,
    rightIcon,
    children,
    fullWidth = false,
    loading = false,
    disabled,
    className,
    ...rest
}: ButtonProps) => {
    const classNames = [
        styles.button,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        iconOnly && styles.iconOnly,
        fullWidth && styles.fullWidth,
        loading && styles.loading,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            className={classNames}
            disabled={disabled || loading}
            aria-busy={loading}
            {...rest}
        >
            {loading && <span className={styles.spinner} aria-hidden="true" />}
            {!loading && leftIcon && <span className={styles.icon}>{leftIcon}</span>}
            {!iconOnly && children}
            {iconOnly && !loading && children /* iconOnly일 땐 children 자리에 아이콘 하나만 */}
            {!loading && !iconOnly && rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </button>
    );
};