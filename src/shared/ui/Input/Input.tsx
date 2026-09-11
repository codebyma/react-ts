import { useId } from 'react';
import type { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** 입력창 위에 표시할 라벨 */
    label?: string;
    /** 입력창 아래 표시할 보조 설명 텍스트 (에러가 없을 때만 표시) */
    helperText?: string;
    /** 에러 메시지. 값이 있으면 에러 상태 스타일 + 이 메시지가 helperText 대신 표시됨 */
    errorText?: string;
    /** 입력창 크기 */
    size?: 'sm' | 'md' | 'lg';
    /** 가로 전체 너비 사용 여부 */
    fullWidth?: boolean;
}

export const Input = ({
    label,
    helperText,
    errorText,
    size = 'md',
    fullWidth = false,
    disabled,
    className,
    id,
    ...rest
}: InputProps) => {
    // label과 input을 연결하기 위한 id. id를 안 넘기면 자동 생성.
    const generatedId = useId();
    const inputId = id ?? generatedId;

    const hasError = Boolean(errorText);
    // 에러가 있으면 에러 메시지를, 없으면 helperText를 보여줌
    const describedText = errorText ?? helperText;

    const wrapperClassNames = [styles.wrapper, fullWidth && styles.fullWidth]
        .filter(Boolean)
        .join(' ');

    const inputClassNames = [
        styles.input,
        styles[`size-${size}`],
        hasError && styles.error,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={wrapperClassNames}>
            {label && (
                <label htmlFor={inputId} className={styles.label}>
                    {label}
                </label>
            )}

            <input
                id={inputId}
                className={inputClassNames}
                disabled={disabled}
                aria-invalid={hasError}
                aria-describedby={describedText ? `${inputId}-description` : undefined}
                {...rest}
            />

            {describedText && (
                <p
                    id={`${inputId}-description`}
                    className={hasError ? styles.errorText : styles.helperText}
                >
                    {describedText}
                </p>
            )}
        </div>
    );
};