import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = memo(({ className }: LoaderProps) => (
    <div className={classNames(cl.Loader, {}, [className])}>

        <div className={cl.lds_ellipsis}>
            <div />
            <div />
            <div />
            <div />
        </div>

    </div>
));
