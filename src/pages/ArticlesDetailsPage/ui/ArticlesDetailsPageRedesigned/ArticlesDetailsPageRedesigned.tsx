import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import cl from './ArticlesDetailsPageRedesigned.module.scss';
import { articlesDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/articleRating';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

interface ArticlesDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesDetailsPage: articlesDetailsPageReducer,
};

const ArticlesDetailsPageRedesigned: FC<ArticlesDetailsPageProps> = (props) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const articleId = __PROJECT__ !== 'storybook' ? id : '1';
    const { t } = useTranslation('article');

    if (!articleId) {
        return <div className={classNames('', {}, [className])}>{t('Статья не найдена')}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <StickyContentLayout
                content={(
                    <Page className={classNames(cl.ArticleDetailsPage, {}, [className])}>
                        <VStack gap="16" max>
                            <DetailsContainer />
                            <ArticleRating articleId={articleId} />
                            <ArticleRecommendationsList />
                            <ArticleDetailsComments id={articleId} />
                        </VStack>
                    </Page>
                )}
                right={(
                    <AdditionalInfoContainer />
                )}
            />
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesDetailsPageRedesigned);
