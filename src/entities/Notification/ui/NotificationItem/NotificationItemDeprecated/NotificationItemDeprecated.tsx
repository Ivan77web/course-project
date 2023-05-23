import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text } from '@/shared/ui/deprecated/Text';
import cl from './NotificationItemDeprecated.module.scss';
import { Notification } from '../../../model/types/notification';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItemDeprecated = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
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
