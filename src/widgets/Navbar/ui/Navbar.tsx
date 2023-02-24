import { LoginModal } from 'features/AuthByUserName';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cl from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation('navbar');
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = () => {
        setIsAuthModal(false);
    };

    const onOpenModal = () => {
        setIsAuthModal(true);
    };

    return (
        <div className={classNames(cl.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cl.links}
                onClick={onOpenModal}
            >
                {t('Войти')}
            </Button>

            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
