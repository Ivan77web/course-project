import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cl from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(cl.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
});
