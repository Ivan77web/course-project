import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';
import cl from './ArticleInfinityList.module.scss';

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
            className={classNames(cl.list, {}, [className])}
        />
    );
});