// app/layout/RootLayout.tsx
import { Outlet } from 'react-router';
// import { Gnb } from '@/widgets/gnb';
// import { Footer } from '@/widgets/footer';

export const RootLayout = () => {
    return (
        <>
            {/* <Gnb /> */}
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    );
};