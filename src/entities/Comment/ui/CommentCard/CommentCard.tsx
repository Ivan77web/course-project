import { memo } from 'react';
import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Comment } from '../../model/types/comment';
import cl from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div
                data-testid="CommentCard.Loader"
                className={classNames(cl.commentCard, {}, [className, cl.loading])}
            >
                <div className={cl.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} className={cl.username} />
                </div>
                <Skeleton width="100%" height={50} className={cl.text} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            data-testid="CommentCard.Content"
            gap="8"
            max
            className={classNames(cl.commentCard, {}, [className])}
        >
            <AppLink to={getRouteProfile(comment.user.id)} className={cl.header}>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                <Text className={cl.username} title={comment.user.username} />
            </AppLink>
            <Text className={cl.text} text={comment.text} />
        </VStack>
    );
});
