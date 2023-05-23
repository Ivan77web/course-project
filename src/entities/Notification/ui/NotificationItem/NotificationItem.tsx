import { memo } from 'react';
import { Notification } from '../../model/types/notification';
import { ToggleFeatures } from '@/shared/lib/features';
import { NotificationItemRedesigned } from './NotificationItemRedesigned/NotificationItemRedesigned';
import { NotificationItemDeprecated } from './NotificationItemDeprecated/NotificationItemDeprecated';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<NotificationItemRedesigned {...props} />}
            off={<NotificationItemDeprecated {...props} />}
        />
    );
});
