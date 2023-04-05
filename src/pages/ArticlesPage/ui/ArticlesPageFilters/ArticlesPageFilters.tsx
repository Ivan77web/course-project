import {
    ArticleSortField, ArticleTypeTabs, ArticleView, ArticleViewSelector,
} from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelector } from 'features/articleSortSelector/ArticleSortSelector';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebouce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ArticleType } from 'entities/Article/model/types/article';
import cl from './ArticlesPageFilters.module.scss';
import {
    getArticlePageOrder, getArticlePageSearch, getArticlePageSort, getArticlePageType, getArticlePageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const dispatch = useAppDispatch();
    const { className } = props;
    const view = useSelector(getArticlePageView);
    const order = useSelector(getArticlePageOrder);
    const sort = useSelector(getArticlePageSort);
    const search = useSelector(getArticlePageSearch);
    const type = useSelector(getArticlePageType);
    const { t } = useTranslation('articles');

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebouce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((value: string) => {
        dispatch(articlesPageActions.setSearch(value));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cl.sortWrapper}>
                <ArticleSortSelector
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                    order={order}
                    sort={sort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>

            <Card className={cl.search}>
                <Input
                    value={search}
                    placeholder={t('Поиск')}
                    onChange={onChangeSearch}
                />
            </Card>

            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cl.tabs}
            />
        </div>
    );
});
