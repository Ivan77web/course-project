import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './SidebarRedesigned.module.scss';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrowRedesigned.svg';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const SidebarRedesigned = memo(({ className }: SidebarProps) => {
    const sidebarItemsList = useSelector(getSidebarItems);
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const itemsList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
        />
    )), [collapsed, sidebarItemsList]);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                cl.Sidebar,
                { [cl.collapsed]: collapsed },
                [className],
            )}
        >
            <AppLogo size={collapsed ? 30 : 50} className={cl.appLogo} />

            <VStack role="navigation" gap="8" className={cl.items}>
                {itemsList}
            </VStack>

            <Icon
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cl.collapseBtn}
                Svg={ArrowIcon}
                clickable
            />

            <div className={cl.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cl.lang} />
            </div>
        </aside>
    );
});
