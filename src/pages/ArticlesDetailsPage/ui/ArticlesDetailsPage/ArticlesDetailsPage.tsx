import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import cl from './ArticlesDetailsPage.module.scss';
import { articlesDetailsPageReducer } from '../../model/slices';
import { ArticlesDetailsPageHeader } from '../ArticlesDetailsPageHeader/ArticlesDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/articleRating';

interface ArticlesDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesDetailsPage: articlesDetailsPageReducer,
};

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = (props) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cl.ArticleDetailsPage, {}, [className])}>
                <VStack gap="16" max>
                    <ArticlesDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRating articleId={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesDetailsPage);
