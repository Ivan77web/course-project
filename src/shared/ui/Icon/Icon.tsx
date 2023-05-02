import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        inverted = false,
    } = props;

    return (
        <Svg className={classNames(inverted ? cl.inverted : cl.icon, {}, [className])} />
    );
});
