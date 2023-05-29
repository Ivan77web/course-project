import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Text } from '@/shared/ui/deprecated/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import cl from './ArticleListItemDeprecated.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { AppImage } from '@/shared/ui/deprecated/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItemDeprecated = memo((props: ArticleListItemProps) => {
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
        <>
            <Text text={String(article.views)} className={cl.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div
                data-testid="ArticleListItem"
                className={classNames(cl.articleListItem, {}, [className, cl[view]])}
            >
                <Card className={cl.card}>
                    <div className={cl.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cl.username} />
                        <Text text={article.createdAt} className={cl.date} />
                    </div>

                    <Text title={article.title} className={cl.title} />
                    {types}
                    <AppImage
                        alt={article.title}
                        src={article.img}
                        className={cl.img}
                        fallback={<Skeleton width="100%" height={250} />}
                    />
                    {
                        textBlock && (
                            <ArticleTextBlockComponent block={textBlock} className={cl.textBlock} />
                        )
                    }
                    <div className={cl.footer}>
                        <AppLink
                            to={getRouteArticleDetails(article.id)}
                            target={target}
                        >
                            <Button theme={ThemeButton.OUTLINE}>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
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
