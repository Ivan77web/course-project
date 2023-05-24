import { memo } from 'react';
import { ArticleView } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleViewSelectorRedesigned } from '../ArticleViewSelectorRedesigned/ArticleViewSelectorRedesigned';
import { ArticleViewSelectorDeprecated } from '../ArticleViewSelectorDeprecated/ArticleViewSelectorDeprecated';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ArticleViewSelectorRedesigned {...props} />}
            off={<ArticleViewSelectorDeprecated {...props} />}
        />
    );
});
