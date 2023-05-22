import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

/**
 * @deprecated
 */

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        inverted = false,
        ...otherProps
    } = props;

    return (
        <Svg
            className={classNames(inverted ? cl.inverted : cl.icon, {}, [className])}
            {...otherProps}
        />
    );
});
