import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import cl from './SidebarItemRedesigned.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItemRedesigned = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation('sidebar');
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            className={classNames(cl.item, { [cl.collapsed]: collapsed })}
            activeClassName={cl.active}
        >
            <Icon Svg={item.Icon} />
            <span className={cl.link}>
                {
                    t(item.text)
                }
            </span>
        </AppLink>
    );
});
