import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import React, {
    memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { DropDown } from 'shared/ui/DropDown/DropDown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cl from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onSignOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cl.navbar, {}, [className])}>
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Создать статью')}
                </AppLink>
                <DropDown
                    direction="bottom right"
                    className={cl.dropdown}
                    trigger={<Avatar size={30} src={authData.avatar} />}
                    items={[
                        ...(
                            isAdminPanelAvailable
                                ? [
                                    {
                                        content: t('Админка'),
                                        href: RoutePath.admin_panel,
                                    },
                                ]
                                : []
                        ),
                        {
                            content: t('Профиль'),
                            href: RoutePath.profile + authData.id,
                        },
                        {
                            content: t('Выйти'),
                            onClick: onSignOut,
                        },
                    ]}
                />
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
