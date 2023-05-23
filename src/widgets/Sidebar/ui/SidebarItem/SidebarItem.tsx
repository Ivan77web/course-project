import { memo } from 'react';
import { SidebarItemType } from '../../model/types/sidebar';
import { ToggleFeatures } from '@/shared/lib/features';
import { SidebarItemRedesigned } from '../SidebarItemRedesigned/SidebarItemRedesigned';
import { SidebarItemDeprecated } from '../SidebarItemDeprecated/SidebarItemDeprecated';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<SidebarItemRedesigned {...props} />}
            off={<SidebarItemDeprecated {...props} />}
        />
    );
});
