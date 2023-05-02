import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme,
}

export const Card = memo((props: CardProps) => {
    const {
        className, children, theme = CardTheme.NORMAL, ...otherProps
    } = props;

    return (
        <div
            className={classNames(cl.card, {}, [className, cl[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
