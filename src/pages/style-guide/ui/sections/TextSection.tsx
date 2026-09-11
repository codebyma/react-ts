import { Text } from '@/shared/ui';
import type { TypographyKey, ColorToken } from '@/shared/ui';
import styles from './TextSection.module.scss';

// typography.ts에 정의된 프리셋 키 전체 (실제 목록에 맞게 조정해주세요)
const presets: TypographyKey[] = [
    'd32b', 'd28b',
    'h24b', 'h20b', 'h20sb', 'h18sb',
    'b17sb', 'b17m', 'b17r', 'b15m', 'b15r',
    'c13m', 'c13r', 'c11r',
];

// _colors.scss에 정의된 텍스트용 시맨틱 컬러 토큰
const colorTokens: ColorToken[] = [
    'text-primary',
    'text-secondary',
    'text-tertiary',
    'text-disabled',
    'text-link',
    'brand',
    'success',
    'warning',
    'danger',
];

export const TextSection = () => {
    return (
        <section>
            <h2>Text</h2>
            <Text preset="b17m" color="success" className={styles["test"]}>
                success
            </Text>
            <h3>Preset</h3>
            {presets.map((preset) => (
                <div key={preset} style={{ marginBottom: 8 }}>
                    <Text preset={preset}>{preset} — 샘플 텍스트입니다</Text>
                </div>
            ))}

            <h3>Color</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                {colorTokens.map((color) => (
                    <Text key={color} preset="b17m" color={color}>
                        {color} — 샘플 텍스트입니다
                    </Text>
                ))}
            </div>

            <h3>Color on dark background (text-inverse 확인용)</h3>
            <div style={{ background: '#191f28', padding: 16, borderRadius: 8 }}>
                <Text preset="b17m" color="text-inverse">
                    text-inverse — 어두운 배경 위 텍스트
                </Text>
            </div>
        </section>
    );
};