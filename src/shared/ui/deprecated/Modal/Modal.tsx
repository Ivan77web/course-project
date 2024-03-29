import { ReactNode } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Portal } from '../Portal/Portal';
import cl from './Modal.module.scss';
import { Overlay } from '../../redesigned/Overlay';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

/**
 * @deprecated
 */

export const Modal = (props: ModalProps) => {
    const {
        children,
        isOpen,
        onClose,
        className,
        lazy,
    } = props;

    const { isClosing, isMounted, close } = useModal({
        animationDelay: ANIMATION_DELAY,
        isOpen,
        onClose,
    });
    const { theme } = useTheme();
    const mods: Mods = {
        [cl.opened]: isOpen,
        [cl.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cl.Modal, mods, [className, theme, 'app_modal'])}>
                <Overlay onClick={close} />
                <div className={cl.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
