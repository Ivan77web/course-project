import { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear_inverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted',
}

export enum ButtonSize{
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cl.square]: square,
        [cl.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cl.Button, mods, [className, cl[theme], cl[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
