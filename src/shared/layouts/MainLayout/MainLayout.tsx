import { ReactElement, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header?: ReactElement;
    content?: ReactElement;
    rightbar?: ReactElement;
    sidebar?: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const {
        className,
        header,
        content,
        rightbar,
        sidebar,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cl.mainLayout, {}, [className])}>
            <div className={cl.sidebar}>{sidebar}</div>
            <div className={cl.content}>{content}</div>
            <div className={cl.rightbar}>
                <div className={cl.header}>{header}</div>
                <div className={cl.toolbar}>{rightbar}</div>
            </div>
        </div>
    );
});
