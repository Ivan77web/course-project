import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cl from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
    return (
        new Array(view === ArticleView.BIG ? 3 : 9)
            .fill(0)
            .map((item, index) => <ArticleListItemSkeleton className={cl.card} view={view} key={index} />)
    );
};

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
    } = props;
    const { t } = useTranslation('articles');

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem key={article.id} className={cl.card} article={article} view={view} />
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cl.articleList, {}, [className, cl[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div className={classNames(cl.articleList, {}, [className, cl[view]])}>
            {
                articles?.length > 0
                    ? articles?.map(renderArticle)
                    : null

            }
            {isLoading && getSkeletons(view)}
        </div>
    );
});
