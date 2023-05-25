import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getRouteAdmin, getRouteProfile, getRouteSettings } from '@/shared/const/router';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { DropDown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { DropDown } from '@/shared/ui/redesigned/Popups';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation('avatarDropdown');
    const dispatch = useAppDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;
    const authData = useSelector(getUserAuthData);

    const onSignOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    const items = [
        ...(
            isAdminPanelAvailable
                ? [
                    {
                        content: t('Админка'),
                        href: getRouteAdmin(),
                    },
                ]
                : []
        ),
        {
            content: t('Профиль'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Настройки'),
            href: getRouteSettings(),
        },
        {
            content: t('Выйти'),
            onClick: onSignOut,
        },
    ];

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <DropDown
                    className={classNames('', {}, [className])}
                    direction="bottom right"
                    trigger={<Avatar size={40} src={authData.avatar} />}
                    items={items}
                />
            )}
            off={(
                <DropdownDeprecated
                    className={classNames('', {}, [className])}
                    direction="bottom right"
                    trigger={<AvatarDeprecated fallbackInverted size={30} src={authData.avatar} />}
                    items={items}
                />
            )}
        />
    );
});
