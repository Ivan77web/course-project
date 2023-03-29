import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
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

    const { t } = useTranslation();

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem key={article.id} className={cl.card} article={article} view={view} />
        );
    };

    if (isLoading) {
        return (
            <div className={classNames(cl.articleList, {}, [className, cl[view]])}>
                {getSkeletons(view)}
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
        </div>
    );
});
