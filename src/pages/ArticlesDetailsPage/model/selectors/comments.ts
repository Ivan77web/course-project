import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
export const getArticleDetailsError = (state: StateSchema) => state.articleDetailsComments?.error;
