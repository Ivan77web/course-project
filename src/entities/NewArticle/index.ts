import { NewArticlePreview } from './ui/NewArticlePreview/NewArticlePreview';
import { NewArticleReducer, NewArticleActions } from './model/slices/NewArticleSlice';
import {
    getNewArticleBlocks, getNewArticleTitle, getNewArticleSubtitle, getNewArticleImg, getNewArticleType,
} from './model/selectors/NewArticle';

export type { NewArticleSchema } from './model/types/NewArticleSchema';
export {
    NewArticlePreview,
    NewArticleReducer,
    NewArticleActions,
    getNewArticleBlocks,
    getNewArticleTitle,
    getNewArticleSubtitle,
    getNewArticleImg,
    getNewArticleType,
};
