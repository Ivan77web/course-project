import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/items';
import cl from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation('sidebar');

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cl.item, { [cl.collapsed]: collapsed })}
        >
            <item.Icon className={cl.icon} />
            <span className={cl.link}>
                {
                    t(item.text)
                }
            </span>
        </AppLink>
    );
});
