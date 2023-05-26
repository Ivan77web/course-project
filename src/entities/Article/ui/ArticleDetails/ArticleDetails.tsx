import { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { ArticleDetailsReducer } from '../../model/slice/ArticleDetailsSlice';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleDetailsRedesigned } from '../ArticleDetailsRedesigned/ArticleDetailsRedesigned';
import { ArticleDetailsDeprecated } from '../ArticleDetailsDeprecated/ArticleDetailsDeprecated';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDatails: ArticleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ArticleDetailsRedesigned {...props} />}
                off={<ArticleDetailsDeprecated {...props} />}
            />
        </DynamicModuleLoader>
    );
});
