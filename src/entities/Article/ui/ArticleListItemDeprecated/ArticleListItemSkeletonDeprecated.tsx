import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import cl from './ArticleListItemDeprecated.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeletonDeprecated = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;
    const types = <Skeleton width={130} height={16} className={cl.types} />;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cl.articleListItem, {}, [className, cl[view]])}>
                <Card className={cl.card}>
                    <div className={cl.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton width={150} height={16} className={cl.username} />
                        <Skeleton width={150} height={16} className={cl.date} />
                    </div>

                    <Skeleton width={250} height={24} className={cl.title} />
                    <Skeleton height={200} className={cl.img} />

                    <div className={cl.footer}>
                        <Skeleton width={200} height={36} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cl.articleListItem, {}, [className, cl[view]])}>
            <Card className={cl.card}>
                <div className={cl.imageWrapper}>
                    <Skeleton width={200} height={200} className={cl.img} />
                </div>

                <div className={cl.infoWrapper}>
                    {types}
                </div>

                <Skeleton width={150} height={16} className={cl.title} />
            </Card>
        </div>
    );
});
