import { FC, memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import cl from './ArticlesPageDeprecated.module.scss';
import { ArticleInfinityList } from '../ArticleInfinityList/ArticleInfinityList';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPageDeprecated: FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <Page
            data-testid="ArticlesPage"
            onScrollEnd={onLoadNextPart}
            className={classNames(cl.ArticlesPage, {}, [className])}
        >
            <ArticlesPageFilters />
            <ArticleInfinityList className={cl.list} />
            <ArticlePageGreeting />
        </Page>
    );
};

export default memo(ArticlesPageDeprecated);
