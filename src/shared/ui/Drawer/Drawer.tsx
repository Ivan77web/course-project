import { ReactNode, memo, useEffect } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '@headlessui/react';
import cl from './Drawer.module.scss';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    onClose?: () => void;
    isOpen?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
    } = props;

    const { theme } = useTheme();

    const mods: Mods = {
        [cl.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(cl.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div
                    className={cl.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});
