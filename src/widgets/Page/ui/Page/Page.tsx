import {
    MutableRefObject, ReactNode, useRef, UIEvent, useLayoutEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getScrollByPath, scrollSaveActions } from '@/features/scrollSave';
import { StateSchema } from '@/app/providers/StoreProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { UseInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import cl from './Page.module.scss';
import { TestProps } from '@/shared/types/tests';
import { toggleFeatures } from '@/shared/lib/features';

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname));

    UseInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            path: pathname,
            position: e.currentTarget.scrollTop,
        }));
    }, 500);

    const classes = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cl.pageRedesigned,
        off: () => cl.page,
    });

    useLayoutEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <main
            ref={wrapperRef}
            className={classNames(classes, {}, [className])}
            onScroll={onScroll}
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            {onScrollEnd ? <div className={cl.trigger} ref={triggerRef} /> : null}
        </main>
    );
};
