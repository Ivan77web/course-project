import {
    memo, useCallback, useState,
} from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover } from '@/shared/ui/deprecated/Popups';
import { NotificationsList } from '@/entities/Notification';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import NotificationIcon from '@/shared/assets/icons/notifications.svg';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import cl from './NotifictionButton.module.scss';

interface NotifictionButtonProps {
    className?: string;
}

export const NotifictionButton = memo((props: NotifictionButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ThemeButton.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cl.notifictionButton, {}, [className])}
                    trigger={trigger}
                >
                    <NotificationsList className={cl.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationsList />
                </Drawer>
            </MobileView>
        </div>
    );
});
