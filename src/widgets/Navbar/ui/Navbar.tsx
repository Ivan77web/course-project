import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cl from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation('navbar');

    return (
        <div className={classNames(cl.navbar, {}, [className])}>
            <div className={cl.links} />
        </div>
    );
};
