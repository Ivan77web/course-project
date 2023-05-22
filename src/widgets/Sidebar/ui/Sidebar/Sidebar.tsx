import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { SidebarRedesigned } from '../SidebarRedesigned/SidebarRedesigned';
import { SidebarDeprecated } from '../SidebarDeprecated/SidebarDeprecated';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<SidebarRedesigned {...props} />}
            off={<SidebarDeprecated {...props} />}
        />
    );
});
