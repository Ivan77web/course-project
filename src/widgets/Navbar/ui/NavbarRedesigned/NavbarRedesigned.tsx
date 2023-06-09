import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUserName';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotifictionButton } from '@/features/notifictionButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cl from './NavbarRedesigned.module.scss';
import { RegestrationModal } from '@/features/RegestrationModal';

interface NavbarProps {
    className?: string
}

export const NavbarRedesigned = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const [isOpenRegistration, setIsOpenRegistration] = useState(false);

    const onCloseModalAuth = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onCloseModalRegistration = useCallback(() => {
        setIsOpenRegistration(false);
    }, []);

    const onOpenModalAuth = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onOpenModalRegistration = useCallback(() => {
        setIsOpenRegistration(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cl.navbar, {}, [className])}>
                <HStack gap="16" className={cl.actions}>
                    <NotifictionButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cl.navbar, {}, [className])}>
            <HStack gap="8">
                <Button
                    variant="clear"
                    className={cl.links}
                    onClick={onOpenModalAuth}
                >
                    {t('Войти')}
                </Button>
                <Button
                    variant="clear"
                    className={cl.links}
                    onClick={onOpenModalRegistration}
                >
                    {t('Регистрация')}
                </Button>
            </HStack>

            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModalAuth}
                />
            )}

            {isOpenRegistration && (
                <RegestrationModal
                    isOpen={isOpenRegistration}
                    onClose={onCloseModalRegistration}
                />
            )}
        </header>
    );
});
