import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RoutePath } from '@/shared/const/router';
import { Avatar } from '@/shared/ui/Avatar';
import { DropDown } from '@/shared/ui/Popups';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
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

    return (
        <DropDown
            className={classNames('', {}, [className])}
            direction="bottom right"
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
    );
});
