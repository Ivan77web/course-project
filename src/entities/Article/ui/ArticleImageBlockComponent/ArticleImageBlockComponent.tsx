import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleImageBlock } from '../../model/types/article';
import cl from './ArticleImageBlockComponent.module.scss';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton, Skeleton as SkeletonDeprecated } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppImage as AppImageDeprecated } from '@/shared/ui/deprecated/AppImage';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;
    const fallback = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => <Skeleton width="100%" height={200} />,
        off: () => <SkeletonDeprecated width="100%" height={200} />,
    });

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <div className={classNames(cl.articleImageBlockComponent, {}, [className])}>
                    <AppImage
                        src={block.src}
                        className={cl.img}
                        alt={block.title}
                        fallback={fallback}
                        errorFallback={fallback}
                    />
                    {block.title && (
                        <Text text={block.title} align="center" />
                    )}
                </div>
            )}
            off={(
                <div className={classNames(cl.articleImageBlockComponent, {}, [className])}>
                    <AppImageDeprecated
                        src={block.src}
                        className={cl.img}
                        alt={block.title}
                        fallback={fallback}
                        errorFallback={fallback}
                    />
                    {block.title && (
                        <TextDeprecated text={block.title} align={TextAlign.CENTER} />
                    )}
                </div>
            )}
        />
    );
});
