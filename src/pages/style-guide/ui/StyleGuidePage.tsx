import { TextSection } from './sections/TextSection';
import { ButtonSection } from './sections/ButtonSection';
import { InputSection } from './sections/InputSection';

export const StyleGuidePage = () => {
    return (
        <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 48 }}>
            <h1>Style Guide</h1>
            <TextSection />
            <ButtonSection />
            <InputSection />
            {/* 컴포넌트 추가될 때마다 아래에 Section 추가 */}
        </div>
    );
};