import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cl from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    return (
        <div className={classNames(cl.Text, {}, [className, cl[theme], cl[align], cl[size]])}>
            {title && <p className={cl.title}>{title}</p>}
            {text && <p className={cl.text}>{text}</p>}
        </div>
    );
});
