import { ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema';
import { ArticleDetailsPageRecommendationSchema } from './ArticleDetailsPageRecommendationSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentSchema,
    recommendations: ArticleDetailsPageRecommendationSchema,
}
