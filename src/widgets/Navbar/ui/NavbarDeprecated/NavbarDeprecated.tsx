import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUserName';
import { getUserAuthData } from '@/entities/User';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotifictionButton } from '@/features/notifictionButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cl from './NavbarDeprecated.module.scss';

interface NavbarProps {
    className?: string
}

export const NavbarDeprecated = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cl.navbar, {}, [className])}>
                <AppLink
                    to={getRouteArticleCreate()}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack gap="16" className={cl.actions}>
                    <NotifictionButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cl.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cl.links}
                onClick={onOpenModal}
            >
                {t('Войти')}
            </Button>

            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
