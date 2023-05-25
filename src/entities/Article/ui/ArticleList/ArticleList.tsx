import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/consts';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListRedesigned } from '../ArticleListRedesigned/ArticleListRedesigned';
import { ArticleListDeprecated } from '../ArticleListDeprecated/ArticleListDeprecated';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo((props: ArticleListProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ArticleListRedesigned {...props} />}
            off={<ArticleListDeprecated {...props} />}
        />
    );
});
