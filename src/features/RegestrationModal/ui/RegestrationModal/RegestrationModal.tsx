import { useTranslation } from 'react-i18next';
import { Suspense, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './RegestrationModal.module.scss';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Loader } from '@/shared/ui/redesigned/Loader';
import { RegistrationFormAsync } from '../RegistrationForm/RegistrationForm.async';

interface RegestrationModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const RegestrationModal = memo((props: RegestrationModalProps) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;
    const { t } = useTranslation();

    return (
        <Modal
            className={classNames(cl.RegestrationModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <RegistrationFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
});
