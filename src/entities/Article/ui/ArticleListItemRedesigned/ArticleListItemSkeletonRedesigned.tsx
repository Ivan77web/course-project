import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import cl from './ArticleListItemRedesigned.module.scss';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeletonRedesigned = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;
    const types = <Skeleton width={130} height={16} className={cl.types} />;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cl.articleListItem, {}, [className, cl[view]])}>
                <Card className={cl.card}>
                    <VStack gap="16">
                        <HStack gap="8">
                            <Skeleton width={32} height={32} border="50%" />
                            <Skeleton width={150} height={24} className={cl.username} />
                        </HStack>

                        <Skeleton width={200} height={24} />

                        <Skeleton width={300} height={24} />

                        <Skeleton width="100%" height={350} />

                        <Skeleton width="100%" height={70} />

                        <HStack max justify="between">
                            <Skeleton width={150} height={40} border="50px" />
                            <Skeleton width={70} height={40} className={cl.username} />
                        </HStack>
                    </VStack>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cl.articleListItem, {}, [className, cl[view]])}>
            <Card className={cl.card}>
                <VStack max gap="8">
                    <Skeleton width="100%" height={140} />

                    <Skeleton width={120} height={24} />

                    <Skeleton width={160} height={30} />

                    <Skeleton width={140} height={30} />

                    <Skeleton width={170} height={30} />

                    <HStack gap="8">
                        <Skeleton width={32} height={32} border="50%" />
                        <Skeleton width={150} height={24} />
                    </HStack>
                </VStack>
            </Card>
        </div>
    );
});
