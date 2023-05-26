import { memo } from 'react';
import { Comment } from '../../model/types/comment';
import { ToggleFeatures } from '@/shared/lib/features';
import { CommentsListRedesigned } from '../CommentsListRedesigned/CommentsListRedesigned';
import { CommentsListDeprecated } from '../CommentsListDeprecated/CommentsListDeprecated';

interface CommentsListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentsList = memo((props: CommentsListProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <CommentsListRedesigned {...props} />
            )}
            off={(
                <CommentsListDeprecated {...props} />
            )}
        />
    );
});
