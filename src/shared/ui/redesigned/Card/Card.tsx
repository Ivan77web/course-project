import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'roundBorder' | 'normalBorder';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    0: 'gap_0',
    8: 'gap_8',
    16: 'gap_16',
    24: 'gap_24',
};

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        max,
        padding = '8',
        border = 'normalBorder',
        ...otherProps
    } = props;

    console.log(border);

    const paddingClass = mapPaddingToClass[padding];

    return (
        <div
            className={
                classNames(
                    cl.card,
                    {
                        [cl.max]: max,
                    },
                    [
                        className,
                        cl[variant],
                        cl[paddingClass],
                        cl[border],
                    ],
                )
            }
            {...otherProps}
        >
            {children}
        </div>
    );
});
