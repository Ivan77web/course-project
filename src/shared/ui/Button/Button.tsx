import React, { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cl.Button, {}, [className, cl[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
}