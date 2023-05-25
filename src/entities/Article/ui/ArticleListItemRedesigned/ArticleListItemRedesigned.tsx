import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Text } from '@/shared/ui/redesigned/Text';
import EyeIcon from '@/shared/assets/icons/eyeRedesigned.svg';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import cl from './ArticleListItemRedesigned.module.scss';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target = '_self',
    } = props;
    const { t } = useTranslation('articles');

    const types = (
        <Text
            text={article.type.map((word) => t(word)).join(', ')}
            className={cl.types}
        />
    );

    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} className={cl.views} />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <Card
                padding="24"
                max
                data-testid="ArticleListItem"
                className={classNames(cl.articleListItem, {}, [className, cl[view]])}
            >
                <VStack max gap="16">
                    <HStack gap="8">
                        <Avatar size={32} src={article.user.avatar} />
                        <Text bold text={article.user.username} />
                        <Text text={article.createdAt} />
                    </HStack>

                    <Text title={article.title} bold />
                    <Text text={article.subtitle} size="s" />

                    <AppImage
                        alt={article.title}
                        src={article.img}
                        className={cl.img}
                        fallback={<Skeleton width="100%" height={250} />}
                    />

                    {
                        textBlock.paragraphs && (
                            <Text
                                className={cl.textBlock}
                                text={textBlock.paragraphs.slice(0, 2).join(' ')}
                            />
                        )
                    }

                    <HStack max justify="between">
                        <AppLink
                            to={getRouteArticleDetails(article.id)}
                            target={target}
                        >
                            <Button variant="outline">
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            data-testid="ArticleListItem"
            target={target}
            className={classNames(cl.articleListItem, {}, [className, cl[view]])}
            to={getRouteArticleDetails(article.id)}
        >
            <Card className={cl.card}>
                <div className={cl.imageWrapper}>
                    <AppImage
                        alt={article.title}
                        src={article.img}
                        className={cl.img}
                        fallback={<Skeleton width={200} height={200} />}
                        errorFallback={<Skeleton width={200} height={200} />}
                    />
                    <Text text={article.createdAt} className={cl.date} />
                </div>

                <div className={cl.infoWrapper}>
                    {types}
                    {views}
                </div>

                <Text text={article.title} className={cl.title} />
            </Card>
        </AppLink>
    );
});
