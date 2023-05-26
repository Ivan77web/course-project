import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import cl from './ArticleDetailsRedesigned.module.scss';
import { renderArticleBlock } from './RenderBlock';
import { AppImage } from '@/shared/ui/redesigned/AppImage';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsRedesigned = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const articleData = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    let content;

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    if (isLoading) {
        content = (
            <>
                <HStack justify="center" max className={cl.avatarWrapper}>
                    <Skeleton className={cl.avatar} width={200} height={200} border="50%" />
                </HStack>

                <Skeleton className={cl.title} width={300} height={32} />
                <Skeleton className={cl.skeleton} width={600} height={24} />
                <Skeleton className={cl.skeleton} width="100%" height={200} />
                <Skeleton className={cl.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                variant="error"
                title={t('Произошла ошибка при загрузке статьи')}
                align="center"
                size="l"
            />
        );
    } else {
        content = (
            <>
                <Text
                    title={articleData?.title}
                    size="l"
                    bold
                />
                <Text title={articleData?.subtitle} />

                <AppImage
                    fallback={<Skeleton width="100%" height={420} border="16px" />}
                    src={articleData?.img}
                    className={cl.img}
                />
                {
                    articleData?.blocks.map(renderArticleBlock)
                }
            </>
        );
    }

    return (
        <VStack gap="16" max className={classNames(cl.articleDetails, {}, [className])}>
            {content}
        </VStack>
    );
});
