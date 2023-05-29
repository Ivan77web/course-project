import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import cl from './ArticlesDetailsPageDeprecated.module.scss';
import { articlesDetailsPageReducer } from '../../model/slices';
import { ArticlesDetailsPageHeader } from '../ArticlesDetailsPageHeader/ArticlesDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/articleRating';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/deprecated/Card';

interface ArticlesDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesDetailsPage: articlesDetailsPageReducer,
};

const ArticlesDetailsPageDeprecated: FC<ArticlesDetailsPageProps> = (props) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const articleId = __PROJECT__ !== 'storybook' ? id : '1';
    const { t } = useTranslation('article');

    if (!articleId) {
        return <div className={classNames('', {}, [className])}>{t('Статья не найдена')}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cl.ArticleDetailsPage, {}, [className])}>
                <VStack gap="16" max>
                    <ArticlesDetailsPageHeader />
                    <ArticleDetails id={articleId} />
                    <ToggleFeatures
                        feature="isArticleRatingEnabled"
                        on={<ArticleRating articleId={articleId} />}
                        off={<Card max>{t('Оценка статей скоро появится')}</Card>}
                    />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={articleId} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesDetailsPageDeprecated);
