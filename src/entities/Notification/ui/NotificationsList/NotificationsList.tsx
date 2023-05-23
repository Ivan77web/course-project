import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { NotificationsListRedesigned } from './NotificationsListRedesigned/NotificationsListRedesigned';
import { NotificationsListDeprecated } from './NotificationsListDeprecated/NotificationsListDeprecated';

interface NotificationsListProps {
    className?: string;
}

export const NotificationsList = memo((props: NotificationsListProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<NotificationsListRedesigned {...props} />}
            off={<NotificationsListDeprecated {...props} />}
        />
    );
});
