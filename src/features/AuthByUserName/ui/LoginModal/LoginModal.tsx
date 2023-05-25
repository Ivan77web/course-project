import { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/redesigned/Loader';
import { Modal as ModalDeprecated, Modal } from '@/shared/ui/redesigned/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { ToggleFeatures } from '@/shared/lib/features';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Modal
                    className={classNames('', {}, [className])}
                    isOpen={isOpen}
                    onClose={onClose}
                    lazy
                >
                    <Suspense fallback={<Loader />}>
                        <LoginFormAsync onSuccess={onClose} />
                    </Suspense>
                </Modal>
            )}
            off={(
                <ModalDeprecated
                    className={classNames('', {}, [className])}
                    isOpen={isOpen}
                    onClose={onClose}
                    lazy
                >
                    <Suspense fallback={<Loader />}>
                        <LoginFormAsync onSuccess={onClose} />
                    </Suspense>
                </ModalDeprecated>
            )}
        />
    );
};
