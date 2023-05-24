import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './ArticlesFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleSortSelector } from '@/features/articleSortSelector';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import SearchIcon from '@/shared/assets/icons/searchIcon.svg';
import { SortOrder } from '@/shared/types/sort';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
    search: string;
    onChangeSearch: (value: string) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const { t } = useTranslation('articles');
    const {
        className,
        onChangeType,
        onChangeSearch,
        search,
        onChangeSort,
        sort,
        onChangeOrder,
        order,
        type,
    } = props;

    return (
        <Card
            className={classNames(cl.articlesFilters, {}, [className])}
            padding="24"
        >
            <VStack gap="32">
                <Input
                    addonLeft={<Icon Svg={SearchIcon} />}
                    value={search}
                    placeholder={t('Поиск')}
                    onChange={onChangeSearch}
                />
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                    className={cl.tabs}
                />
                <ArticleSortSelector
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                    order={order}
                    sort={sort}
                />
            </VStack>
        </Card>
    );
});
