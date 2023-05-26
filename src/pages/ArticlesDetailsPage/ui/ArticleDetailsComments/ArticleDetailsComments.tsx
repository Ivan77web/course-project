import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticleDetailsIsLoading } from '@/entities/Article';
import { CommentsList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/addCommentForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack as VStackDeprecated } from '@/shared/ui/deprecated/Stack';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const dispatch = useAppDispatch();
    const { className, id } = props;
    const { t } = useTranslation('article');
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <VStack gap="16" max className={classNames('', {}, [className])}>
                    <Text
                        size="l"
                        // className={cl.commentTitle}
                        title={t('Комментарии')}
                    />
                    <AddCommentForm onSendComment={onSendComment} />
                    <CommentsList
                        comments={comments}
                        isLoading={commentsIsLoading}
                    />
                </VStack>
            )}
            off={(
                <VStackDeprecated gap="16" max className={classNames('', {}, [className])}>
                    <TextDeprecated
                        size={TextSize.L}
                        // className={cl.commentTitle}
                        title={t('Комментарии')}
                    />
                    <AddCommentForm onSendComment={onSendComment} />
                    <CommentsList
                        comments={comments}
                        isLoading={commentsIsLoading}
                    />
                </VStackDeprecated>
            )}
        />
    );
});
