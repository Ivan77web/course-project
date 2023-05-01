import { ReactNode, memo, useEffect } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '@headlessui/react';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import cl from './Drawer.module.scss';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    onClose?: () => void;
    isOpen?: boolean;
    lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
        lazy,
    } = props;

    const { theme } = useTheme();
    const { isClosing, isMounted, close } = useModal({
        animationDelay: 300,
        isOpen,
        onClose,
    });
    const mods: Mods = {
        [cl.opened]: isOpen,
        [cl.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cl.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div
                    className={cl.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});
