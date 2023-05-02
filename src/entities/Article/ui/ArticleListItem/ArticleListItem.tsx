import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Text } from '@/shared/ui/Text/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/Card/Card';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import cl from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
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
    const img = <img alt={article.title} src={article.img} className={cl.img} />;

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames(cl.articleListItem, {}, [className, cl[view]])}>
                <Card className={cl.card}>
                    <div className={cl.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cl.username} />
                        <Text text={article.createdAt} className={cl.date} />
                    </div>

                    <Text title={article.title} className={cl.title} />
                    {types}
                    {img}
                    {
                        textBlock && (
                            <ArticleTextBlockComponent block={textBlock} className={cl.textBlock} />
                        )
                    }
                    <div className={cl.footer}>
                        <AppLink
                            to={RoutePath.article_details + article.id}
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
            target={target}
            className={classNames(cl.articleListItem, {}, [className, cl[view]])}
            to={RoutePath.article_details + article.id}
        >
            <Card className={cl.card}>
                <div className={cl.imageWrapper}>
                    {img}
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
