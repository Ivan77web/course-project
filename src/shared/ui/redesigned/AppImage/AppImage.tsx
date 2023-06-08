import {
    ImgHTMLAttributes, ReactElement, memo, useLayoutEffect, useState,
} from 'react';
import { Loader } from '../Loader';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './AppImage.module.scss';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        fallback,
        errorFallback,
        src,
        alt = 'image',
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useLayoutEffect(() => {
        const image = new Image();
        image.src = src ?? '';
        image.onload = () => {
            setIsLoading(false);
            setIsError(false);
        };
        image.onerror = () => {
            setIsLoading(false);
            setIsError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if ((isError && errorFallback) || (isError && fallback)) {
        if (errorFallback) {
            return errorFallback;
        }

        if (fallback) {
            return fallback;
        }
    }

    if (isError && isLoading) {
        return <Loader />;
    }

    return (
        <img
            className={classNames(cl.AppImage, {}, [className])}
            src={src}
            alt={alt}
            {...otherProps}
        />
    );
});
