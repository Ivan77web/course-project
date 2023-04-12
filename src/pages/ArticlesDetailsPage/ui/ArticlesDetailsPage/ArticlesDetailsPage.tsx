import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentsList } from 'entities/Comment';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleDetailsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice';
import cl from './ArticlesDetailsPage.module.scss';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleRecommendation } from '../../model/slices/ArticleDetailsPageRecommendationSlice';
import {
    getArticleDetailsRecommendationsIsLoading,
} from '../../model/selectors/recommendations';
import { articlesDetailsPageReducer } from '../../model/slices';
import { ArticlesDetailsPageHeader } from '../ArticlesDetailsPageHeader/ArticlesDetailsPageHeader';

interface ArticlesDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesDetailsPage: articlesDetailsPageReducer,
};

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = (props) => {
    const dispatch = useAppDispatch();
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('article');
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsIsLoading);
    const recommendations = useSelector(getArticleRecommendation.selectAll);
    const recommendationsIsLoading = useSelector(getArticleDetailsRecommendationsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <Page className={classNames('', {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cl.ArticleDetailsPage, {}, [className])}>
                <VStack gap="16" max>
                    <ArticlesDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <Text
                        size={TextSize.L}
                        className={cl.commentTitle}
                        title={t('Рекомендуем')}
                    />
                    <ArticleList
                        articles={recommendations}
                        isLoading={recommendationsIsLoading}
                        className={cl.recommendations}
                        target="_blank"
                    />
                    <Text
                        size={TextSize.L}
                        className={cl.commentTitle}
                        title={t('Комментарии')}
                    />
                    <AddCommentForm onSendComment={onSendComment} />
                    <CommentsList
                        comments={comments}
                        isLoading={commentsIsLoading}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesDetailsPage);
