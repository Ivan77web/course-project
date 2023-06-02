import { memo } from 'react';
import { NewArticleReducer, NewArticlePreview } from '@/entities/NewArticle';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ReducersList, DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cl from './CreateArticlePage.module.scss';
import { NewArticleMainData } from '@/widgets/NewArticleMainData';
import { NewArticleMap } from '@/widgets/NewArticleMap';
import { NewArticleInputsBlock } from '@/widgets/NewArticleInputsBlock';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Card } from '@/shared/ui/redesigned/Card';

interface CreateArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    newArticle: NewArticleReducer,
};

export const CreateArticlePage = memo(({ className }: CreateArticlePageProps) => {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <StickyContentLayout
                className={classNames(cl.CreateArticlePage, {}, [className])}
                content={(
                    <VStack
                        max
                        className={cl.content}
                    >
                        {/* <div className={cl.NewArticlePreview}> */}
                        <Card className={cl.NewArticlePreview}>
                            <NewArticlePreview />
                        </Card>
                        <div className={cl.NewArticleInputsBlock}>
                            <NewArticleInputsBlock />
                        </div>
                    </VStack>
                )}
                right={(
                    <VStack
                        className={cl.right}
                    >
                        <div className={cl.NewArticleMainData}>
                            <NewArticleMainData />
                        </div>
                        <div className={cl.NewArticleMap}>
                            <NewArticleMap />
                        </div>
                    </VStack>

                )}
            />
        </DynamicModuleLoader>
    );
});
