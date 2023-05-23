import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import cl from './NotificationItemRedesigned.module.scss';
import { Notification } from '../../../model/types/notification';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItemRedesigned = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card
            className={classNames(cl.notificationItem, {}, [className])}
        >
            <Text
                title={item.title}
                text={item.description}
            />
        </Card>
    );

    if (item.href) {
        return (
            <a className={cl.Link} target="_blank" href={item.href} rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});
