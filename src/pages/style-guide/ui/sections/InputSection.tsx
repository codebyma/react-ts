import { Input } from '@/shared/ui';
import styles from './InputSection.module.scss';

const sizes = ['sm', 'md', 'lg'] as const;

export const InputSection = () => {
    return (
        <section className={styles.section}>
            <h2>Input</h2>

            <h3>기본</h3>
            <div className={styles.row}>
                <Input label="이름" placeholder="이름을 입력하세요" />
            </div>

            <h3>Size</h3>
            <div className={styles.column}>
                {sizes.map((size) => (
                    <Input key={size} size={size} placeholder={`size: ${size}`} />
                ))}
            </div>

            <h3>Helper Text</h3>
            <div className={styles.row}>
                <Input
                    label="이메일"
                    placeholder="example@email.com"
                    helperText="회신받을 이메일을 입력해주세요"
                />
            </div>

            <h3>Error</h3>
            <div className={styles.row}>
                <Input
                    label="전화번호"
                    defaultValue="010-1234"
                    errorText="올바른 전화번호 형식이 아니에요"
                />
            </div>

            <h3>Disabled</h3>
            <div className={styles.row}>
                <Input label="수정 불가" defaultValue="수정할 수 없어요" disabled />
            </div>

            <h3>Full Width</h3>
            <div className={styles.row}>
                <Input label="검색" placeholder="전체 너비" fullWidth />
            </div>
        </section>
    );
};