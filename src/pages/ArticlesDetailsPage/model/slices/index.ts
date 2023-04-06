import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentReducer } from './ArticleDetailsCommentsSlice';
import { articleDetailsPageRecommendationReducer } from './ArticleDetailsPageRecommendationSlice';

export const articlesDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentReducer,
    recommendations: articleDetailsPageRecommendationReducer,
});
