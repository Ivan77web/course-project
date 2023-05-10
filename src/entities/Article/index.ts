import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import {
    Article,
} from './model/types/article';
import {
    ArticleView, ArticleSortField, ArticleType, ArticleBlockType,
} from './model/consts/consts';
import { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import { getArticleDetailsData, getArticleDetailsIsLoading } from './model/selectors/articleDetails';
import { ArticleList } from './ui/ArticleList/ArticleList';

export {
    ArticleDetails,
    getArticleDetailsData,
    ArticleView,
    ArticleList,
    ArticleSortField,
    ArticleType,
    ArticleBlockType,
    getArticleDetailsIsLoading,
};

export type { Article };
export type { ArticleDetailsSchema };
