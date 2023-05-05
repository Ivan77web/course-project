import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticleDetailsIsLoading } from '@/entities/Article';
import { CommentsList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/addCommentForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

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
        <VStack gap="16" max className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                // className={cl.commentTitle}
                title={t('Комментарии')}
            />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentsList
                comments={comments}
                isLoading={commentsIsLoading}
            />
        </VStack>
    );
});
