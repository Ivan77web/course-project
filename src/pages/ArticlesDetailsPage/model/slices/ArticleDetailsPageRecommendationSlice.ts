import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsPageRecommendationSchema } from '../types/ArticleDetailsPageRecommendationSchema';

export const recommendationAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendation = recommendationAdapter.getSelectors<StateSchema>(
    (state) => state.articlesDetailsPage?.recommendations || recommendationAdapter.getInitialState(),
);

const ArticleDetailsPageRecommendationSlice = createSlice({
    name: 'ArticleDetailsPageRecommendationSlice',
    initialState: recommendationAdapter.getInitialState<ArticleDetailsPageRecommendationSchema>({
        isLoading: false,
        entities: {},
        ids: [],
        error: undefined,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                recommendationAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articleDetailsPageRecommendationReducer,
} = ArticleDetailsPageRecommendationSlice;
