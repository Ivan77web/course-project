import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainPageIcon from 'shared/assets/icons/mainPage.svg';
import cl from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation('sidebar');

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cl.Sidebar, { [cl.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cl.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={ButtonSize.XL}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cl.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cl.item}
                >
                    <MainPageIcon className={cl.icon} />
                    <span className={cl.link}>
                        {
                            t('Главная страница')
                        }
                    </span>
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cl.item}
                >
                    <AboutIcon className={cl.icon} />
                    <span className={cl.link}>
                        {
                            t('О сайте')
                        }
                    </span>
                </AppLink>
            </div>

            <div className={cl.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cl.lang} />
            </div>
        </div>
    );
};
