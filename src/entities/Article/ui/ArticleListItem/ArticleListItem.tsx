import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import cl from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view } = props;
    const { t } = useTranslation('articles');
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [navigate, article]);

    const types = <Text text={article.type.join(', ')} className={cl.types} />;
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
                        <Button theme={ThemeButton.OUTLINE} onClick={onOpenArticle}>
                            {t('Читать далее...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cl.articleListItem, {}, [className, cl[view]])}>
            <Card className={cl.card} onClick={onOpenArticle}>
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
        </div>
    );
});
