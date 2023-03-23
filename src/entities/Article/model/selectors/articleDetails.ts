import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateSchema) => state.articleDatails?.data;
export const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDatails?.isLoading;
export const getArticleDetailsError = (state: StateSchema) => state.articleDatails?.error;
