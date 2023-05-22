import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './SidebarRedesigned.module.scss';
import { AppLogo } from '@/shared/ui/deprecated/AppLogo';

interface SidebarProps {
    className?: string;
}

export const SidebarRedesigned = memo(({ className }: SidebarProps) => {
    return (
        <aside
            data-testid="sidebar"
            className={classNames(cl.Sidebar, {}, [className])}
        >
            <AppLogo className={cl.appLogo} />
        </aside>
    );
});
