import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import cl from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cl.commentCard, {}, [className])}>
                <div className={cl.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} className={cl.username} />
                </div>
                <Skeleton width="100%" height={50} className={cl.text} />
            </div>
        );
    }

    return (
        <div className={classNames(cl.commentCard, {}, [className])}>
            <div className={cl.header}>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                <Text className={cl.username} title={comment.user.username} />
            </div>
            <Text className={cl.text} text={comment.text} />
        </div>
    );
});
