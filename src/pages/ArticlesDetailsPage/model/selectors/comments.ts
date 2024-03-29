import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsIsLoading = (state: StateSchema) => state.articlesDetailsPage?.comments.isLoading;
export const getArticleDetailsError = (state: StateSchema) => state.articlesDetailsPage?.comments.error;
