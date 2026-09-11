import { Button } from '@/shared/ui';

const variants = ['primary', 'secondary', 'outline', 'text'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

export const ButtonSection = () => {
    return (
        <section>
            <h2>Button</h2>

            <h3>Variant</h3>
            <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
                {variants.map((variant) => (
                    <Button key={variant} variant={variant}>
                        {variant}
                    </Button>
                ))}
            </div>

            <h3>Size</h3>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 24 }}>
                {sizes.map((size) => (
                    <Button key={size} size={size}>
                        {size}
                    </Button>
                ))}
            </div>

            <h3>State</h3>
            <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
                <Button disabled>disabled</Button>
                <Button loading>loading</Button>
                <Button fullWidth>fullWidth</Button>
            </div>

            <h3>Icon Only</h3>
            <div style={{ display: 'flex', gap: 12 }}>
                {sizes.map((size) => (
                    <Button key={size} size={size} iconOnly aria-label="아이콘 버튼">
                        ★
                    </Button>
                ))}
            </div>
        </section>
    );
};