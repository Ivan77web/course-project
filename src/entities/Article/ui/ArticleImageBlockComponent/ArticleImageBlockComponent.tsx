import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cl from './ArticleImageBlockComponent.module.scss';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;
    const fallback = <Skeleton width="100%" height={200} />;

    return (
        <div className={classNames(cl.articleImageBlockComponent, {}, [className])}>
            <AppImage
                src={block.src}
                className={cl.img}
                alt={block.title}
                fallback={fallback}
                errorFallback={fallback}
            />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
});
