import { memo } from 'react';
import { t } from 'i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { ArticleSortSelector } from '@/features/articleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import cl from './ArticlesPageFilters.module.scss';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const {
        onChangeSort,
        onChangeType,
        sort,
        type,
        onChangeSearch,
        search,
        onChangeView,
        view,
        onChangeOrder,
        order,
    } = useArticleFilters();

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
