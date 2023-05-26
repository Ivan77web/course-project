import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Comment } from '../../model/types/comment';
import cl from './CommentCardRedesigned.module.scss';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { getRouteProfile } from '@/shared/const/router';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Card } from '@/shared/ui/redesigned/Card';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCardRedesigned = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack
                max
                gap="8"
                data-testid="CommentCard.Loader"
                className={classNames('', {}, [className, cl.loading])}
            >
                <HStack gap="8">
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} />
                </HStack>
                <Skeleton width="100%" height={50} className={cl.text} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <Card max>
            <VStack
                data-testid="CommentCard.Content"
                gap="8"
                className={classNames('', {}, [className])}
            >
                <AppLink to={getRouteProfile(comment.user.id)}>
                    <HStack gap="8">
                        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                        <Text title={comment.user.username} />
                    </HStack>
                </AppLink>
                <Text text={comment.text} />
            </VStack>
        </Card>
    );
});
