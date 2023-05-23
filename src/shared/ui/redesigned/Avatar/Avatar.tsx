import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import UserIcon from '../../../assets/icons/user-avatar.svg';
import { Icon } from '../../deprecated/Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size = 100,
        alt,
    } = props;

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
        };
    }, [size]);

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />;

    return (
        <AppImage
            errorFallback={errorFallback}
            fallback={fallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cl.Avatar, {}, [className])}
        />
    );
};
