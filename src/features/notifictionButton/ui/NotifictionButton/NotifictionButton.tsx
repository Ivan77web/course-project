import {
    memo, useCallback, useState,
} from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ThemeButton } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Popover } from '@/shared/ui/redesigned/Popups';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { NotificationsList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notifications.svg';
import NotificationIconRedesigned from '@/shared/assets/icons/notificationsRedesigned.svg';
import { Drawer as DrawerDeprecated } from '@/shared/ui/deprecated/Drawer';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import cl from './NotifictionButton.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Icon Svg={NotificationIconRedesigned} clickable onClick={onOpenDrawer} />
            )}
            off={(
                <ButtonDeprecated onClick={onOpenDrawer} theme={ThemeButton.CLEAR}>
                    <IconDeprecated Svg={NotificationIcon} inverted />
                </ButtonDeprecated>
            )}
        />
    );

    return (
        <div>
            <BrowserView>

                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={(
                        <Popover
                            className={classNames(cl.notifictionButton, {}, [className])}
                            trigger={trigger}
                        >
                            <NotificationsList className={cl.notifications} />
                        </Popover>
                    )}
                    off={(
                        <PopoverDeprecated
                            className={classNames(cl.notifictionButton, {}, [className])}
                            trigger={trigger}
                        >
                            <NotificationsList className={cl.notifications} />
                        </PopoverDeprecated>
                    )}
                />
            </BrowserView>
            <MobileView>
                {trigger}
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={(
                        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                            <NotificationsList />
                        </Drawer>
                    )}
                    off={(
                        <DrawerDeprecated isOpen={isOpen} onClose={onCloseDrawer}>
                            <NotificationsList />
                        </DrawerDeprecated>
                    )}
                />
            </MobileView>
        </div>
    );
});
