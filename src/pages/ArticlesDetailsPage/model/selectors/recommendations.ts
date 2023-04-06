import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsRecommendationsIsLoading = (state: StateSchema) => {
    return state.articlesDetailsPage?.recommendations?.isLoading;
};
export const getArticleDetailsRecommendationsError = (state: StateSchema) => {
    return state.articlesDetailsPage?.recommendations?.error;
};
