import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './NewArticleMap.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';

interface NewArticleMapProps {
    className?: string;
}

export const NewArticleMap = memo((props: NewArticleMapProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Card
            className={classNames(cl.newArticleMap, {}, [className])}
            max
        >
            <div className={cl.test} />
            <div className={cl.test} />
            <div className={cl.test} />
            <div className={cl.test} />
            <div className={cl.test} />

            <div className={cl.test} />
            <div className={cl.test} />
            <div className={cl.test} />
            <div className={cl.test} />
            <div className={cl.test} />
            <div className={cl.test} />
        </Card>
    );
});
