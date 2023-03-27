import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cl from './CommentsList.module.scss';

interface CommentsListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentsList = memo((props: CommentsListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation('comment');

    if (isLoading) {
        return (
            <div className={classNames(cl.commentsList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cl.commentsList, {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard className={cl.comment} comment={comment} key={comment.id} />
                    ))
                    : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
    );
});
