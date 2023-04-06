import { lazy } from 'react';

// export const AboutPageAsync = lazy(() => import('./AboutPage'));
export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleEditPage')), 1500);
}));
