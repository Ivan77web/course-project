import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { NavbarRedesigned } from '../NavbarRedesigned/NavbarRedesigned';
import { NavbarDeprecated } from '../NavbarDeprecated/NavbarDeprecated';

interface NavbarProps {
    className?: string
}

export const Navbar = memo((props: NavbarProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<NavbarRedesigned {...props} />}
            off={<NavbarDeprecated {...props} />}
        />
    );
});
