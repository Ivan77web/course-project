import { FC, memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import ArticlesDetailsPageRedesigned from '../ArticlesDetailsPageRedesigned/ArticlesDetailsPageRedesigned';
import ArticlesDetailsPageDeprecated from '../ArticlesDetailsPageDeprecated/ArticlesDetailsPageDeprecated';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = (props) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ArticlesDetailsPageRedesigned {...props} />}
            off={<ArticlesDetailsPageDeprecated {...props} />}
        />
    );
};

export default memo(ArticlesDetailsPage);
