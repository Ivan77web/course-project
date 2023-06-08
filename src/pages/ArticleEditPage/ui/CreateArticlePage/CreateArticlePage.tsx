import { memo } from 'react';
import { NewArticleReducer, NewArticlePreview } from '@/entities/NewArticle';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ReducersList, DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cl from './CreateArticlePage.module.scss';
import { NewArticleInputsBlock } from '@/widgets/NewArticleInputsBlock';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Card } from '@/shared/ui/redesigned/Card';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addArticle } from '../../model/services/addArticle/addArticle';
import { NewArticleMap } from '@/widgets/NewArticleMap';
import { NewArticleMainData } from '@/widgets/NewArticleMainData';

interface CreateArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    newArticle: NewArticleReducer,
};

export const CreateArticlePage = memo(({ className }: CreateArticlePageProps) => {
    const dispatch = useAppDispatch();
    const onClick = () => {
        dispatch(addArticle());
    };

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <HStack
                className={classNames(cl.CreateArticlePage, {}, [className])}
                gap="16"
            >
                <VStack
                    max
                    className={cl.content}
                >
                    <Card className={cl.NewArticlePreview}>
                        <NewArticlePreview />
                    </Card>
                    <div className={cl.NewArticleInputsBlock}>
                        <NewArticleInputsBlock />
                    </div>
                </VStack>

                <VStack
                    className={cl.right}
                >
                    <div className={cl.NewArticleMainData}>
                        <NewArticleMainData
                            onClick={onClick}
                        />
                    </div>
                    <div className={cl.NewArticleMap}>
                        <NewArticleMap />
                    </div>
                </VStack>
            </HStack>
        </DynamicModuleLoader>
    );
});
