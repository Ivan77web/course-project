import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwither } from "widgets/ThemeSwither";
import cl from "./Navbar.module.scss";

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(cl.navbar, {}, [className])}>
            <ThemeSwither/>

            <div className={cl.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={"/"}
                    className={cl.mainLink}
                >
                    Главная страница
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={"/about"}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    )
}