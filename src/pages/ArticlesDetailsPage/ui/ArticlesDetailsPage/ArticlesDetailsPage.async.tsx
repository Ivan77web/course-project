import { lazy } from 'react';

// export const MainPageAsync = lazy(() => import('./MainPage'));
export const ArticlesDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
