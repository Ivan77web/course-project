import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwither } from "widgets/ThemeSwitcher";
import cl from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            className={classNames(cl.Sidebar, { [cl.collapsed]: collapsed }, [className])}
        >
            <button onClick={onToggle}>
                toggle
            </button>

            <div className={cl.switchers}>
                <ThemeSwither />
                <LangSwitcher className={cl.lang}/>
            </div>
        </div>
    );
}