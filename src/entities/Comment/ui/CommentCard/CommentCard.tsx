import { memo } from 'react';
import { Comment } from '../../model/types/comment';
import { ToggleFeatures } from '@/shared/lib/features';
import { CommentCardRedesigned } from '../CommentCardRedesigned/CommentCardRedesigned';
import { CommentCardDeprecated } from '../CommentCardDeprecated/CommentCardDeprecated';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <CommentCardRedesigned {...props} />
            )}
            off={(
                <CommentCardDeprecated {...props} />
            )}
        />
    );
});
