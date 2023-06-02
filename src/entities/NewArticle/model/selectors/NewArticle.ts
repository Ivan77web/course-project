import { StateSchema } from '@/app/providers/StoreProvider';

export const getNewArticleAll = (state: StateSchema) => state.newArticle;
export const getNewArticleTitle = (state: StateSchema) => state.newArticle?.title;
export const getNewArticleSubtitle = (state: StateSchema) => state.newArticle?.subtitle;
export const getNewArticleImg = (state: StateSchema) => state.newArticle?.img;
export const getNewArticleType = (state: StateSchema) => state.newArticle?.type;
export const getNewArticleBlocks = (state: StateSchema) => state.newArticle?.blocks;
