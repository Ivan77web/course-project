import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { useNotifications } from '../../../api/notificationApi';
import cl from './NotificationsListDeprecated.module.scss';
import { NotificationItem } from '../../NotificationItem/NotificationItem';

interface NotificationsListProps {
    className?: string;
}

export const NotificationsListDeprecated = memo((props: NotificationsListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack
                className={classNames(cl.notificationsList, {}, [className])}
                gap="16"
                max
            >
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack
            className={classNames(cl.notificationsList, {}, [className])}
            gap="16"
            max
        >
            {data?.map((item) => <NotificationItem item={item} key={item.id} />)}
        </VStack>
    );
});
