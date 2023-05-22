import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import {
    Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/deprecated/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { ArticleBlockType } from '../../model/consts/consts';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleDetailsReducer } from '../../model/slice/ArticleDetailsSlice';
import cl from './ArticleDetails.module.scss';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDatails: ArticleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
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

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    className={cl.block}
                    block={block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cl.block}
                    block={block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    className={cl.block}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);

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
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке статьи')}
                align={TextAlign.CENTER}
                size={TextSize.L}
            />
        );
    } else {
        content = (
            <>
                <HStack justify="center" max className={cl.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={articleData?.img}
                        className={cl.avatar}
                    />
                </HStack>
                <VStack gap="4" max data-testid="ArticleDetails.Info">
                    <Text
                        className={cl.title}
                        title={articleData?.title}
                        text={articleData?.subtitle}
                    />
                    <HStack gap="8" className={cl.articleInfo}>
                        <Icon Svg={EyeIcon} className={cl.icon} />
                        <Text text={String(articleData?.views)} />
                    </HStack>
                    <HStack gap="8" className={cl.articleInfo}>
                        <Icon Svg={CalendarIcon} className={cl.icon} />
                        <Text text={articleData?.createdAt} />
                    </HStack>
                </VStack>
                {
                    articleData?.blocks.map(renderBlock)
                }
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap="16" max className={classNames(cl.articleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
