// import { FC, memo, useCallback } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { classNames } from '@/shared/lib/classNames/classNames';
// import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
// import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
// import { Page } from '@/widgets/Page';
// import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
// import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
// import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
// import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
// import cl from './ArticlesPage.module.scss';
// import { ArticleInfinityList } from '../ArticleInfinityList/ArticleInfinityList';
// import { ArticlePageGreeting } from '@/features/articlePageGreeting';

// interface ArticlesPageProps {
//     className?: string;
// }

// const reducers: ReducersList = {
//     articlesPage: articlesPageReducer,
// };

// const ArticlesPage: FC<ArticlesPageProps> = (props) => {
//     const { className } = props;
//     const dispatch = useAppDispatch();
//     const [searchParams] = useSearchParams();

//     const onLoadNextPart = useCallback(() => {
//         if (__PROJECT__ !== 'storybook') {
//             dispatch(fetchNextArticlesPage());
//         }
//     }, [dispatch]);

//     useInitialEffect(() => {
//         dispatch(initArticlesPage(searchParams));
//     });

//     return (
//         <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
//             <Page
//                 data-testid="ArticlesPage"
//                 onScrollEnd={onLoadNextPart}
//                 className={classNames(cl.ArticlesPage, {}, [className])}
//             >
//                 <ArticlesPageFilters />
//                 <ArticleInfinityList />
//                 <ArticlePageGreeting />
//             </Page>
//         </DynamicModuleLoader>
//     );
// };

// export default memo(ArticlesPage);

import { FC, memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import ArticlesPageRedesigned from '../ArticlesPageRedesigned/ArticlesPageRedesigned';
import ArticlesPageDeprecated from '../ArticlesPageDeprecated/ArticlesPageDeprecated';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ArticlesPageRedesigned {...props} />}
                off={<ArticlesPageDeprecated {...props} />}
            />
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
