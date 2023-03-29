import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const Card = memo((props: CardProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <div
            className={classNames(cl.card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});