import { ArticleDetails } from 'entities/Article';
import { CommentsList } from 'entities/Comment';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleDetailsIsLoading } from '../../model/selectors/comments';
import { articleDetailsCommentReducer, getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice';
import cl from './ArticlesDetailsPage.module.scss';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

interface ArticlesDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentReducer,
};

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = (props) => {
    const dispatch = useAppDispatch();
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('article');
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cl.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cl.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentsList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesDetailsPage);
