import { FC, memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import cl from './ArticlesPageRedesigned.module.scss';
import { ArticleInfinityList } from '../ArticleInfinityList/ArticleInfinityList';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';
import { CreateArticleButton } from '@/features/CreateArticleButton';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPageRedesigned: FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <StickyContentLayout
            left={<ViewSelectorContainer />}
            content={(
                <Page
                    data-testid="ArticlesPage"
                    onScrollEnd={onLoadNextPart}
                    className={classNames(cl.ArticlesPage, {}, [className])}
                >
                    <ArticleInfinityList className={cl.list} />
                    <ArticlePageGreeting />
                </Page>
            )}
            right={(
                <VStack
                    max
                    gap="16"
                >
                    <FiltersContainer />
                    <CreateArticleButton />
                </VStack>
            )}
        />
    );
};

export default memo(ArticlesPageRedesigned);
