import { ReactElement } from 'react';
import { AppRoutes } from '@/shared/const/router';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';

export function useAppToolbar() {
    const appRoute = useRouteChange();

    const toolbarByRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_RETAILS]: <ScrollToolbar />,
    };

    return toolbarByRoute[appRoute];
}
