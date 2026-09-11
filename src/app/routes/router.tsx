/* eslint-disable react-refresh/only-export-components */
// app/routes/router.tsx
import { createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react';
import { RootLayout } from '@/app/layout/RootLayout';

const StyleGuidePage = lazy(() =>
    import('@/pages/style-guide').then((m) => ({ default: m.StyleGuidePage }))
);

const withSuspense = (element: React.ReactNode) => (
    <Suspense fallback={<div>로딩중...</div>}>{element}</Suspense>
);

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: 'style-guide', element: withSuspense(<StyleGuidePage />) },
        ],
    },
]);