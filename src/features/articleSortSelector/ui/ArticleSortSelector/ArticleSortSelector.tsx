import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOptions } from '@/shared/ui/deprecated/Select';
import { ArticleSortField } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import cl from './ArticleSortSelector.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Listbox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;
    const { t } = useTranslation('articles');

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITTLE,
            content: t('названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам'),
        },
    ], [t]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <div className={classNames(cl.articleSortSelectorRedesigned, {}, [className])}>
                    <VStack gap="8">
                        <Text text={t('Сортировать по')} />
                        <Listbox
                            items={sortFieldOptions}
                            value={sort}
                            onChange={onChangeSort}
                        />
                        <Listbox
                            items={orderOptions}
                            value={order}
                            onChange={onChangeOrder}
                        />
                    </VStack>
                </div>
            )}
            off={(
                <div className={classNames(cl.articleSortSelector, {}, [className])}>
                    <Select
                        options={sortFieldOptions}
                        label={t('Сортировать по')}
                        value={sort}
                        onChange={onChangeSort}
                    />
                    <Select
                        options={orderOptions}
                        label={t('по')}
                        value={order}
                        onChange={onChangeOrder}
                        className={cl.order}
                    />
                </div>
            )}
        />
    );
});
