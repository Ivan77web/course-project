import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';

interface ArticleInfinityListProps {
    className?: string;
}

export const ArticleInfinityList = memo((props: ArticleInfinityListProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);
    const error = useSelector(getArticlePageError);
    const articles = useSelector(getArticles.selectAll);

    if (error) {
        return <Text theme={TextTheme.ERROR} text={t('Произошла ошибка при загрузке статей')} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={classNames('', {}, [className])}
        />
    );
});
